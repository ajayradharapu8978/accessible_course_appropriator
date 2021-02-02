import mongoose from "mongoose";
var mongoosePaginate = require("mongoose-paginate");
import bcrypt from "bcrypt";

const regSchema = new mongoose.Schema({
  local: {
    userName: String,
    email: String,
    password: String,
  },
  google: {
    id: String,
    email: String,
    displayName: String,
    token: String,
  },
  twitter: {
    id: String,
    username: String,
    displayName: String,
    token: String,
  }
},
{
  timestamps: true
});
    
regSchema.pre("save", async function () {
  if (this.isModified("local.password") || this.isNew) {
    var salt = await bcrypt.genSalt(10);
    var hash = await bcrypt.hash(this.local.password, salt);
    this.local.password = hash;
  }
});

export const comparePassword = (req, res, next) => {
  regModel
    .findOne({ "local.email": req.body.email })
    .exec()
    .then(function (data) {
      if (data != null) {
        bcrypt.compare(req.body.password, data.local.password, (err, isMatch) => {
          if (!isMatch) {
            res.send(`invalid password`);
          } else {
            next();
          }
        });
      } else {
        res.send("invalid user");
      }
    });
};

regSchema.plugin(mongoosePaginate);

const regModel = mongoose.model("registration", regSchema);

export default regModel;

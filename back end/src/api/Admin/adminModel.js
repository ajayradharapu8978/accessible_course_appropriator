import mongoose from "mongoose";
import bcrypt from "bcrypt";

const adminSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

adminSchema.pre("save", async function () {
  if (this.isModified("password") || this.isNew) {
    var salt = await bcrypt.genSalt(10);
    var hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
  }
});

export const comparePassword = (req, res, next) => {
  adminModel
    .findOne({ userName: req.body.userName })
    .exec()
    .then((data) => {
      if (data != null) {
        bcrypt.compare(req.body.password, data.password, (err, isMatch) => {
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

const adminModel = mongoose.model("admins", adminSchema);

export default adminModel;

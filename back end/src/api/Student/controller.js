import registration from '../Common/StudentRegModel';
import {sendEmail} from '../Common/email';
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

export const signin = (req, res) => {
    console.log(req.body);
  registration.findOne({ 'local.email': req.body.email }, (err, result) => {
    if (err) {
        res.send(err);
    }
    else {
      const resp = bcrypt.compareSync(req.body.password, result.local.password);
      const token = jwt.sign({ _id: result._id }, "jwtSecret", {
        expiresIn: "3h",
      });
      res.send({ success: resp, token });
    }
  });
};


export const profile = (req, res) => {
    registration.findOne({"_id":req.query.id},(err, result) => {
        if (err){
            res.send(err);
        }
        else{
            res.send(result);
        }
    })
}

export const forgotPassword = (req, res) => {
    registration.findOne({"email":req.query.email},(err, result) => {
        if (err){
            res.send(err);
        }
        else{
            // const subject = 'File Received';
            // const body = `You Received a File from online course finder<br><br>Student Name: ${result.firstName}&nbsp;${result.lastName}<br>Password: ${result.password}<br>Please Login Using this Credentials <br>Thank You.`;
            // sendEmail(req.query.email, subject, body);
            res.send(result);
        }
    })
}

export const changePassword = (req, res) => {
    registration.findByIdAndUpdate(req.params.id, req.body, { new: true },(err, result) => {
        if (err){
            res.send(err);
        }
        else{
            // const subject = 'File Received';
            // const body = `You Received a File from online course finder<br><br>Student Name: ${req.body.email}<br>Password: ${req.body.password}<br>Please Login Using this Credentials <br>Thank You.`;
            // sendEmail(req.body.email, subject, body);
            res.send(result);
        }
    })
}

export const addUser = (req, res) => {
  registration.create({local: req.body}, (err, result)=>{
      if (err) {
          res.send(err);
      } else {
          res.send(result);
      }
  })
}

export const updateProfile = (req, res) => {
  registration.findByIdAndUpdate(req.params.id, req.body, { new: true },(err, result) => {
      if (err){
          res.send(err);
      }
      else{
      res.send(result);
      }
  })
}


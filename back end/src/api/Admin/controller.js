import university from "../Common/universityModel";
import courses from "../Common/courseModel";
import Admin from "./adminModel";
import student from "../Common/StudentRegModel";
var bcrypt = require("bcrypt");

export const signin = (req, res, next) => {
  Admin.findOne({ userName: req.body.userName }, (err, result) => {
    if (err) res.send(err);
    else {
      const resp = bcrypt.compareSync(req.body.password, result.password);
      res.send({ success: resp, result: result._id });
    }
  });
};

export const addAdmin = (req, res) => {
  Admin.create(req.body, (err, result) => {
    if (err) {
        res.send(err);
    }
    else {
        res.send(result);
    }
  });
} 

export const showStudentdata = (req, res) => {
  const pageSize = parseInt(req.query.pageSize);
  const currentPage = parseInt(req.query.page);
  const postQuery = student.find();
  let fetchedUsers;
  if (pageSize , currentPage) {
    postQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
  }
  console.log(pageSize , currentPage);
  postQuery
    .then(documents => {
      fetchedUsers = documents;
      return student.count();
    })
    .then(count => {
      res.status(200).json({
        message: "Users fetched successfully!",
        users: fetchedUsers,
        maxUsers: count
      });
    });
};

export const showUniversitydata = (req, res) => {
  const pageSize = parseInt(req.query.pageSize);
  const currentPage = parseInt(req.query.page);
  const postQuery = university.find();
  let fetchedUniversities;
  if (pageSize , currentPage) {
    postQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
  }
  console.log(pageSize , currentPage);
  postQuery
    .then(documents => {
      fetchedUniversities = documents;
      return university.count();
    })
    .then(count => {
      res.status(200).json({
        message: "Universities fetched successfully!",
        Universities: fetchedUniversities,
        maxUniversities: count
      });
    });
};

export const showCourses = (req, res) => {
  courses
    .find({university: req.params.universityId})
    .populate("university")
    .exec((err, result) => {
      if (err) {
        res.send(err);
      } else {
        const resp = result.map((data) => {
          return {
            id: data._id,
            university: data.university.universityName,
            courseName: data.courseName,
            fee: data.fee,
            duration: data.duration,
          };
        });
        res.send(resp);
      }
    });
};

export const addUniversitydata = (req, res) => {
  university.create(req.body, (err, result) => {
    if (err) res.send(err);
    else res.send(result);
  });
};

export const addCoursesdata = (req, res) => {
  courses.create(req.body, (err, result) => {
    if (err) res.send(err);
    else res.send(result);
  });
};

export const deleteUniversitydata = (req, res) => {
  console.log(req.params.id);
  university.findByIdAndRemove(req.params.id, (err, result) => {
    if (err) res.send(err);
    else res.send(result);
  });
};

export const deleteCoursesdata = (req, res) => {
  courses.findByIdAndRemove(req.params.id, (err, result) => {
    if (err) res.send(err);
    else res.send(result);
  });
};

export const editUniversitydata = (req, res) => {
  university.findById(req.params.id, (err, result) => {
    if (err) res.send(err);
    else res.send(result);
  });
};

export const editCoursesdata = (req, res) => {
  courses
    .findById({ _id: req.params.id })
    .populate("university")
    .exec((err, result) => {
      if (err) {
        res.send(err);
      } else {
        const resp = [result].map((data) => {
          return {
            id: data._id,
            university: data.university._id,
            university: data.university.universityName,
            courseName: data.courseName,
            fee: data.fee,
            duration: data.duration,
          };
        });
        res.send(resp);
      }
    });
};

export const updateUniversitydata = (req, res) => {
  university.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, result) => {
      if (err) res.send(err);
      else res.send(result);
    }
  );
};

export const updateCoursesdata = (req, res) => {
  courses.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, result) => {
      if (err) res.send(err);
      else res.send(result);
    }
  );
};

export const deletestudentdata = (req, res) => {
  registration.findByIdAndRemove(req.params.id, (err, result) => {
      if (err){
          res.send(err);
      }
      else{
      res.send(result);
      }
  })
}

export const editstudentdata = (req, res) => {
  registration.findById(req.params.id, (err, result) => {
      if (err)
          res.send(err);
      else
      res.send(result);
  })
}


export const updatestudentdata = (req, res) => {
  registration.findByIdAndUpdate(req.params.id, req.body, { new: true },(err, result) => {
      if (err){
          res.send(err);
      }
      else{
      res.send(result);
      }
  })
}

export const searchstudentdata = (req, res) => {
  registration.find({ "firstName": req.query.firstName }, (err, result) => {
      if (err) {
          res.send(err);
      }
      else {
          res.send(result);
      }
  })
}
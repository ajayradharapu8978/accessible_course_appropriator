import { Router } from 'express';
import { comparePassword } from './adminModel';

import {
    addAdmin,
    showCourses,
    showUniversitydata,
    addCoursesdata,
    addUniversitydata,
    deleteCoursesdata,
    deleteUniversitydata,
    editCoursesdata,
    editUniversitydata,
    updateCoursesdata,
    updateUniversitydata,
    signin,
    deletestudentdata,
    editstudentdata,
    searchstudentdata,
    updatestudentdata,
    showStudentdata

} from './controller'

const router = new Router();

router.post('/adminlogin', comparePassword, signin);

router.get('/showCourses', showCourses);

router.post('/addAdmin', addAdmin);

router.get('/showUniversitydata', showUniversitydata);

router.get('/showStudentdata', showStudentdata);

router.post('/addCoursesdata', addCoursesdata);

router.post('/addUniversitydata', addUniversitydata);

router.delete('/deleteCoursesdata/:id', deleteCoursesdata);

router.delete('/deleteUniversitydata/:id', deleteUniversitydata);

router.get('/editCoursesdata/:id', editCoursesdata);

router.get('/editUniversitydata/:id', editUniversitydata);

router.put('/updateCoursesdata/:id', updateCoursesdata);

router.put('/updateUniversitydata/:id', updateUniversitydata);

router.delete('/deletestudentdata/:id', deletestudentdata);

router.get('/editstudentdata/:id', editstudentdata);

router.put('/updatestudentdata/:id', updatestudentdata);

router.get('/searchstudentdata', searchstudentdata);

export default router
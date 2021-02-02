import { Router } from 'express'
import passport from 'passport';
import { comparePassword } from '../Common/StudentRegModel';

import {
    profile,
    addUser,
    forgotPassword,
    changePassword,
    signin,
    updateProfile

} from './controller'

const router = new Router();

router.get('/forgotPassword/:email', forgotPassword);

router.post('/studentlogin', comparePassword, signin);

router.post('/addstudentdata', addUser);

router.get('/profile/:id', passport.authenticate('jwt',{session: false}), profile);

router.get('/updateProfile/:id', passport.authenticate('jwt',{session: false}), updateProfile);

router.put('/changePassword/:id', passport.authenticate('jwt',{session: false}), changePassword);

export default router
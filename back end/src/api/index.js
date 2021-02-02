import { Router } from 'express'

import admin from './Admin';

import student from './Student';

import auth from './Auth';

const router = new Router();

router.use('/admin', admin);

router.use('/student', student);

router.use('/auth', auth);

export default router
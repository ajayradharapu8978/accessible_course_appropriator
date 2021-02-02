import { Router } from 'express'
import passport from 'passport';
import {
    authenticate,
    logout,
    sendJWTToken
} from './controller'

const router = new Router();

router.get('/google',passport.authenticate('google', {scope: ['profile', 'email'],}));

router.get('/google/callback',passport.authenticate('google', { failureRedirect: '/failure' }), sendJWTToken);



// Twitter
router.get('/twitter', passport.authenticate('twitter'));

router.get('/twitter/callback',passport.authenticate('twitter', { failureRedirect: '/failure' }), sendJWTToken);

// Facebook
router.get('/facebook', passport.authenticate('facebook'));

router.get('/facebook/callback',passport.authenticate('facebook', { failureRedirect: '/failure' }), sendJWTToken);

router.get('/authenticate', passport.authenticate('jwt', { session: false }), authenticate);

router.get('/logout', passport.authenticate('jwt', { session: false }), logout);

export default router
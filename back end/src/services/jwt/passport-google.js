import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth';
import { devConfig } from '../../api/development';
import User from '../../api/Common/StudentRegModel';


export const configureGoogleStrategy = () => {
  passport.use(
    new GoogleStrategy.OAuth2Strategy(
      {
        clientID: devConfig.google.Client_ID,
        clientSecret: devConfig.google.Client_SECRET,
        callbackURL: devConfig.google.callbackURL,
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          //   User.findOrCreate({ googleId: profile.id }, (err, user) => done(err, user));
          console.log('===============================profile: ', profile);

          // find the user by google id
          const user = await User.findOne({ google:{
            id: profile.id
          } });
          if (user) {
            // if user exit
            // return this user
            return done(null, user);
          }

          // otherwise create the user with google
          const newUser = new User({});
          // save accessToken, email, displayName, id
          newUser.google.id = profile.id;
          newUser.google.displayName = profile.displayName;
          newUser.google.email = profile.emails[0].value;
          newUser.google.token = accessToken;
          await newUser.save();
          done(null, newUser);
        } catch (err) {
          console.error(err);
          return done(err);
        }
      }
    )
  );
};

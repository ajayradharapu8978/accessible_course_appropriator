import PassportJWT from 'passport-jwt';
import passport from 'passport';
import Student from '../Common/StudentRegModel';

export const configureJWTStrategy = () => {
  const opts = {};
  opts.jwtFromRequest = PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = "jwtSecret";
  passport.use(
    new PassportJWT.Strategy(opts, (payload, done) => {
      Student.findOne({ _id: payload._id }, (err, student) => {
        if (err) {
          return done(err, false);
        }
        if (student) {
          return done(null, student);
        }
        return done(null, false);
      });
    })
  );
};

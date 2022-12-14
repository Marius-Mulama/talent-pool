const passport = require('passport');
const dotenv = require("dotenv");
dotenv.config();

const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET_ID,
    callbackURL: "/auth/google/callback",
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile)
  }

//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
));

passport.serializeUser((user,done)=>{
    done(null, user)
})

passport.deserializeUser((user,done)=>{
    done(null, user)
})
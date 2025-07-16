const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Person = require("../models/person.model.js");




passport.use(new LocalStrategy(async (userName, pwd, done) => {
    try {
        console.log("Received Credentials : ", userName, pwd);
        const user = await Person.findOne({ username: userName });
        if (!userName) {
            return done(null, false, { message: "Incorrect user" });
        }

        const isPasswordMatch =await  user.comparePassword(pwd);
        if (isPasswordMatch) {
            return done(null, user);
        } else {
            return done(null, false, { message: "Incorrect Password" });
        }
    } catch (error) {
        return done(error);
    }
}));



module.exports = passport;

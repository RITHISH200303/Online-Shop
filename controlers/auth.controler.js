const User = require("../model/user.model");

function getSignUP(req, res) {
  res.render("coustomers/auth/signup");
}

async function signup(req, res) {
  const user = new User(
    req.body.email,
    req.body.password,
    req.body.fullname,
    req.body.street,
    req.body.postal,
    req.body.city
  );

  await user.signup()

  res.redirect('/login')
}

function getLogiIn(req, res) {
  res.render('coustomers/auth/login')
}


module.exports = {
  getSignUP: getSignUP,
  getLogiIn: getLogiIn,
  signup: signup,
};

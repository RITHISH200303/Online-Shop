function getSignUP(req, res) {
 res.render('coustomers/auth/signup') 
}
function getLogiIn(req, res) {}

module.exports = {
  getSignUP: getSignUP,
  getLogiIn: getLogiIn,
};

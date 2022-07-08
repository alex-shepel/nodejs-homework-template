const register = require('./register');
const login = require('./login');
const logout = require('./logout');
const current = require('./current');
const updateAvatar = require('./updateAvatar');
const verify = require('./verify');
const resendVerification = require('./resendVerification');

module.exports = {
  register,
  login,
  logout,
  current,
  updateAvatar,
  verify,
  resendVerification,
};

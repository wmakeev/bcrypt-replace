const bcrypt = require("bcryptjs");

exports.hash = function (value) {
  return bcrypt.hashSync(String(value), 10);
};

exports.compareHash = function (str, hash) {
  return bcrypt.compareSync(String(str), hash);
};

exports.getHasher = (salt) => (value) => {
  return bcrypt.hashSync(value, salt);
};

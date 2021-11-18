const bcrypt = require("bcryptjs");

String.prototype.hash = function () {
  return bcrypt.hashSync(this.toString(), 10);
};

String.prototype.compareHash = function (hash) {
  return bcrypt.compareSync(this.toString(), hash);
};

exports.getHasher = (salt) => (value) => {
  return bcrypt.hashSync(value, salt);
};

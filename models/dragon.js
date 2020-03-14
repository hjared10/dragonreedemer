var orm = require("../config/orm.js");

var dragon = {
  all: function(cb) {
    orm.all("dragons", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create("dragons", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("dragons", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("dragons", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = dragon;

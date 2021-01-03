const orm = require("../config/orm.js");

const burger = {
  all: function (cb) {
    orm.selectAll("burgers", (res) => {
      cb(res);
    });
  },
  create: function (burger_name, cb) {
    orm.insertOne("burgers", "burger_name", burger_name, (res) => {
      cb(res);
    });
  },
  update: function (isDevoured, id, cb) {
    orm.updateOne("burgers", isDevoured, id, (res) => {
      cb(res);
    });
  },
  delete: function (table, condition, cb) {
    orm.deleteOne(table, condition, (res) => {
      cb(res);
    });
  },
};

module.exports = burger;
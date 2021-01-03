const connection = require("./connection");

orm = {
  selectAll: function (tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, (err, result) => {
      if (err) throw err;

      cb(result);
    });
  },
  insertOne: function (tableInput, cols, burger_name, cb) {
    var queryString = "INSERT INTO " + tableInput;
    queryString += " (";
    queryString += cols.toString();
    queryString += " )";
    queryString += "VALUES (?);";

    console.log(queryString);
    connection.query(queryString, burger_name, (err, result) => {
      if (err) throw err;

      cb(result);
    });
  },
  updateOne: function (tableInput, isDevoured, id, cb) {
    var queryString = "UPDATE " + tableInput + " ";
    queryString += "SET devoured = " + isDevoured + " ";
    queryString += "WHERE id = ? ";

    connection.query(queryString, id, (err, result) => {
      if (err) throw err;

      cb(result);
    });
  },
  deleteOne: function (tableInput, condition, cb) {
    var queryString = "DELETE FROM " + tableInput + " ";
    queryString += "WHERE " + condition + ";";

    connection.query(queryString, (err, result) => {
      if (err) throw err;

      cb(result);
    });
  },
};

module.exports = orm;
const connection = require("../models/database");

/* Read */
const getLieux = (req, res, next) => {
  connection.query(`SELECT * FROM lieux`, function (
    error,
    results,
    fields
  ) {
    if (error) throw error;
    res.json({ lieux: results });
  });
};

const getLieuxById = (req, res, next) => {
  const lieuId = req.params.id;
  connection.query(
    `SELECT * FROM lieux WHERE idlieux = ${lieuId}`,
    function (error, results, fields) {
      if (error) throw error;
      res.json({ lieu: results[0] });
    }
  );
};

exports.getLieux = getLieux;
exports.getLieuxById = getLieuxById;
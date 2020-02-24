var express = require('express');
var router = express.Router();
var db = require('../bin/db');

router.get('/', function(req, res) {

  res.setHeader('Content-Type', 'application/json');

  let pathname = req._parsedUrl.pathname.split('/');
  let section = pathname[1];

  var SQL = "";
      SQL += "SELECT *";
      SQL += "  FROM NETFLIX";
      SQL += " WHERE TYPE = 'MOVIE'";
      SQL += " ORDER BY RELEASE_YEAR DESC";

  var results = db.query(SQL, [section], function(error, results, field){
  
    if (error)
    {
      console.log(error.message);
    }

    var resultJson = JSON.stringify(results);
    resultJson     = JSON.parse(resultJson);

    res.json(resultJson);
  });
});

module.exports = router;

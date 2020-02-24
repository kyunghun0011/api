var express = require('express');
var router = express.Router();
var db = require('../bin/db'); 

router.get('/movie', function(req, res){

  res.setHeader('Content-Type', 'application/json');
     
  let pathname = req._parsedUrl.pathname.split('/');
  let section = pathname[1]; // movie

  var SQL = "";
      SQL += "SELECT * ";
      SQL += "  FROM NETFLIX";
      SQL += " WHERE TYPE = 'MOVIE'";

  var results = db.query(SQL, [section], function(error, results, field) {

    if (error)
    {
      console.log(error.message);
    }

    var resultJson = JSON.stringify(results);
    resultJson = JSON.parse(resultJson);

    res.json(resultJson);

  });

});

router.get('/tvshow', function(req, res){

  res.setHeader('Content-Type', 'application/json');
     
  let pathname = req._parsedUrl.pathname.split('/');
  let section = pathname[1];

  console.log("pathname  " + pathname);

  var SQL = "";
      SQL += "SELECT * ";
      SQL += "  FROM NETFLIX";
      SQL += " WHERE TYPE = 'TV SHOW'";

  var results = db.query(SQL, [section], function(error, results, field) {

    if (error)
    {
      console.log(error.message);
    }

    var resultJson = JSON.stringify(results);
    resultJson = JSON.parse(resultJson);

    res.json(resultJson);

  });

});

module.exports = router;

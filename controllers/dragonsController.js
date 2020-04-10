var express = require("express");

var router = express.Router();

var dragon = require("../models/dragon.js");

router.get("/", function(req, res) {
  dragon.all(function(data) {
    var hbsObject = {
      dragons: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/dragon", function(req, res) {
  dragon.create([
    "name", "evil"
  ], [
    req.body.name, req.body.evil
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/dragon/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  dragon.update({
    evil: req.body.evil
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/dragon/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  dragon.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;

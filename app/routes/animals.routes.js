module.exports = app => {
    const animals = require("../controllers/animals.controller.js");
  
    var router = require("express").Router();


    // Retrieve all Tutorials
    router.get("/", animals.findAll);
  
    app.use('/api/animals', router);
  };
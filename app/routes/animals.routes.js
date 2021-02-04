module.exports = app => {
    const animals = require("../controllers/animals.controller.js");
  
    var router = require("express").Router();

    router.get("/", animals.getAll);
    //router.get("/tipo", animals.getAnimals);
  
    app.use('/api/animals', router);
  };
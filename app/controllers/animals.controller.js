const db = require("../models");
const animals = db.animals;
const Op = db.Sequelize.Op;

// Retrieve all animals from the database.
exports.getAll = (req, res) => {}
  animals.findAll({})
  .then(data => {
      res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving animals."
    });
  });


// Retrieve all animals depend on the body req
/*
exports.getAnimals = (req , res ) => {
  const type = req.body.tipo;
  animals.findAll()
  .then(data => {
    const animalsFilter = data.filter(animal => animal.tipo == type);
    res.send(animalsFilter);
})
.catch(err => {
  res.status(500).send({
    message:
      err.message || "Some error occurred while retrieving animals."
  });
});
};
*/
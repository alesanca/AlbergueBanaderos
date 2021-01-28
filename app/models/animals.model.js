module.exports = (sequelize, Sequelize) => {
    const animals = sequelize.define("animals", {
        tipo: {
            type: Sequelize.STRING
        },
        nombre: {
            type: Sequelize.STRING
        },
        genero: {
            type: Sequelize.STRING
        },
        raza: {
            type: Sequelize.STRING
        },
        url: {
            type: Sequelize.STRING
        },
        color: {
            type: Sequelize.STRING
        }
    });
  
    return animals;
  };
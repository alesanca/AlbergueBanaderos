module.exports = (sequelize, Sequelize) => {
    const animales = sequelize.define("animales", {
        id : {
            type: Sequelize.int
        },
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
        }
    });
  
    return animales;
  };
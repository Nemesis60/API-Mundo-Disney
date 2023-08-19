'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Characters', [{
      image: "imagen",
      name: "Cenicienta",
      age: "65",
      weight: 54.14,
      history: "lorem ipsum",
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Characters', null, {});

  }
};

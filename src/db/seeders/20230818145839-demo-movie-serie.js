'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Movie_Series', [{
      image: "image",
      title: "Los cuentos de los hermanos grim",
      date_created: "2023-08-18",
      rate: 2,
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Movie_Series', null, {});

  }
};

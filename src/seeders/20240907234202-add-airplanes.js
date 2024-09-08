'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('airplanes', [{
        modelNumber: 'AirbusA380',
        capacity: 650,
        createdAt: new Date(),
        updatedAt: new Date(),
    }, {
        modelNumber: 'Boeing737',
        capacity: 189,
        createdAt: new Date(),
        updatedAt: new Date(),
    }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('airplanes', {
        [Op.or]: [{modelNumber: 'AirbusA380'}, {modelNumber: 'Boeing737'}]
    });
  }
};

'use strict';
const {Op} = require('sequelize')
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
    await queryInterface.bulkInsert('cities', [{
        name: 'Mumbai',
        createdAt: new Date(),
        updatedAt: new Date(),
    }, {
        name: 'Indore',
        createdAt: new Date(),
        updatedAt: new Date(),
    }, {
        name: 'Thiruvananthapuram',
        createdAt: new Date(),
        updatedAt: new Date(),
    }, {
        name: 'Chennai',
        createdAt: new Date(),
        updatedAt: new Date(),
    }, {
        name: 'Bengaluru',
        createdAt: new Date(),
        updatedAt: new Date(),
    }, {
        name: 'Pune',
        createdAt: new Date(),
        updatedAt: new Date(),
    }, {
        name: 'Delhi',
        createdAt: new Date(),
        updatedAt: new Date(),
    }, {
        name: 'Kolkata',
        createdAt: new Date(),
        updatedAt: new Date(),
    }, {
        name: 'Hyderabad',
        createdAt: new Date(),
        updatedAt: new Date(),
    }, {
        name: 'Chandigarh',
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
    await queryInterface.bulkDelete('cities', {
            [Op.or]: [{name: 'Mumbai'},{name: 'Indore'},{name: 'Thiruvananthapuram'},{name: 'Chennai'},{name: 'Bengaluru'},{name: 'Pune'},{name: 'Kolkata'},{name: 'Hyderabad'},{name: 'Chandigarh'},{name: 'Delhi'}]
            /* OR you could do
            name: {
                [Op.or]: ['Chennai', 'Mumbai', 'Chandigarh', 'Hyderabad', 'Kolkata', 'Delhi', 'Pune', 'Bengaluru', 'Thiruvananthapuram', 'Indore']
            }
            */
        })
  }
};

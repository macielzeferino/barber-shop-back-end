'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('professionals','email',{
      type: Sequelize.STRING,
      allowNull:false,
      unique:true,
    });
    await queryInterface.addColumn('professionals','password', {
      type: Sequelize.TEXT,
      allowNull:false,
    });
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('professionals','email');
    await queryInterface.removeColumn('professionals','password');
  
  }
};

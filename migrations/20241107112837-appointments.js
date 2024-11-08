'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('appointments', {
      id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      status : {
        type : Sequelize.TEXT,
        allowNull: false,
      },
      date_time: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      professional_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'professionals',
          key:'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      client_id:{
        type: Sequelize.INTEGER,
        references:{
          model: 'clients',
          key:'id',
        },
        onUpdate: 'CASCADE',
        onDelete:'SET NULL',
        allowNull: true,
      },
      createdAt:{
        type:Sequelize.DATE,
        allowNull:false,
      },
      updatedAt:{
        type:Sequelize.DATE,
        allowNull:false,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('appointments');
  }
};
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CourseCategories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      idnumber: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      descriptionformat: {
        type: Sequelize.INTEGER
      },
      parent: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      sortorder: {
        type: Sequelize.INTEGER
      },
      coursecount: {
        type: Sequelize.INTEGER
      },
      visible: {
        type: Sequelize.BOOLEAN
      },
      visibleold: {
        type: Sequelize.BOOLEAN
      },
      timemodified: {
        type: Sequelize.BIGINT
      },
      depth: {
        type: Sequelize.INTEGER
      },
      path: {
        type: Sequelize.STRING
      },
      theme: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CourseCategories');
  }
};
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      category: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {   
          model: 'CourseCategories',
          key: 'id',
          foreignKey: true
        }
      },
      sortorder: {
        type: Sequelize.INTEGER,
        autoIncrement: true,  
      },
      startdate: {
        type: Sequelize.BIGINT,
        allowNull: true,
        defaultValue: new Date().getTime()
      },
      enddate: {
        type: Sequelize.BIGINT,
        allowNull: true,
        defaultValue: new Date().getTime()
      },
      marker: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      maxbytes: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      defaultgroupingid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      timecreated: {
        type: Sequelize.BIGINT,
        allowNull: false,
        defaultValue: new Date().getTime()
      },
      timemodified: {
        type: Sequelize.BIGINT,
        allowNull: false,
        defaultValue: new Date().getTime()
      },
      cacherev: {
        type: Sequelize.BIGINT,
        allowNull: false,
        defaultValue: new Date().getTime()
      },
      visible: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      visibleold: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      requested: {
        type: Sequelize.STRING
      },
      enablecompletion: {
        type: Sequelize.STRING
      },
      completionnotify: {
        type: Sequelize.STRING
      },
      summary: {
        type: Sequelize.STRING
      },
      newsitems: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      legacyfiles: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      showreports: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      groupmode: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      groupmodeforce: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      summaryformat: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      showgrades: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      fullname: {
        type: Sequelize.STRING
      },
      shortname: {
        type: Sequelize.STRING
      },
      idnumber: {
        type: Sequelize.STRING
      },
      format: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'topics'
      },
      lang: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'English'
      },
      calendartype: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Georgian'
      },
      theme: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'edutect'
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Courses');
  }
};
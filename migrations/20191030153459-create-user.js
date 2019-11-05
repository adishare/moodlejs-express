'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      auth: {
        type: Sequelize.STRING
      },
      policyagreed: {
        type: Sequelize.BOOLEAN
      },
      deleted: {
        type: Sequelize.BOOLEAN
      },
      confirmed: {
        type: Sequelize.BOOLEAN
      },
      suspended: {
        type: Sequelize.BOOLEAN
      },
      mnehostid: {
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      idnumber: {
        type: Sequelize.STRING
      },
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      emailstop: {
        type: Sequelize.BOOLEAN
      },
      facebook: {
        type: Sequelize.STRING
      },
      instagram: {
        type: Sequelize.STRING
      },
      twitter: {
        type: Sequelize.STRING
      },
      whatsapp: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      institution: {
        type: Sequelize.STRING
      },
      department: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      lang: {
        type: Sequelize.STRING
      },
      calendartype: {
        type: Sequelize.STRING
      },
      theme: {
        type: Sequelize.STRING
      },
      timezone: {
        type: Sequelize.STRING
      },
      firstaccess: {
        type: Sequelize.BIGINT
      },
      lastaccess: {
        type: Sequelize.BIGINT
      },
      lastlogin: {
        type: Sequelize.BIGINT
      },
      currentlogin: {
        type: Sequelize.BIGINT
      },
      lastip: {
        type: Sequelize.STRING
      },
      secret: {
        type: Sequelize.STRING
      },
      picture: {
        type: Sequelize.BIGINT
      },
      url: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      descriptionformat: {
        type: Sequelize.STRING
      },
      mailformat: {
        type: Sequelize.BOOLEAN
      },
      maildigest: {
        type: Sequelize.BOOLEAN
      },
      maildisplay: {
        type: Sequelize.INTEGER
      },
      autosubscribe: {
        type: Sequelize.BOOLEAN
      },
      trackforum: {
        type: Sequelize.BOOLEAN
      },
      timecreated: {
        type: Sequelize.BIGINT
      },
      timemodified: {
        type: Sequelize.BIGINT
      },
      trustbitmask: {
        type: Sequelize.INTEGER
      },
      imgalt: {
        type: Sequelize.STRING
      },
      lastnamephonetic: {
        type: Sequelize.STRING
      },
      firstnamephonetic: {
        type: Sequelize.STRING
      },
      middlename: {
        type: Sequelize.STRING
      },
      alternatename: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
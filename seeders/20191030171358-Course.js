'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Courses', [{
      category: 1,
      requested: "requested",
      enablecompletion: 'enablecompletion',
      completionnotify: 'completionmodify',
      summary: 'summary of course this is summary gonna be long text',
      fullname: "Nodejs for beginner",
      shortname: "nodejs beginner",
    },{
      category: 2,
      requested: "requested",
      enablecompletion: 'enablecompletion',
      completionnotify: 'completionmodify',
      summary: 'summary of course this is summary gonna be long text',
      fullname: "Moodle for Beginner",
      shortname: "moodle beginner",
    },{
      category: 1,
      requested: "requested",
      enablecompletion: 'enablecompletion',
      completionnotify: 'completionmodify',
      summary: 'summary of course this is summary gonna be long text',
      fullname: "Data Science",
      shortname: "Data Science",
    },{
      category: 3,
      requested: "requested",
      enablecompletion: 'enablecompletion',
      completionnotify: 'completionmodify',
      summary: 'summary of course this is summary gonna be long text',
      fullname: "Complete Python",
      shortname: "Python",
    },{
      category: 1,
      requested: "requested",
      enablecompletion: 'enablecompletion',
      completionnotify: 'completionmodify',
      summary: 'summary of course this is summary gonna be long text',
      fullname: "Intro to ES6",
      shortname: "ES6",
    },{
      category: 1,
      requested: "requested",
      enablecompletion: 'enablecompletion',
      completionnotify: 'completionmodify',
      summary: 'summary of course this is summary gonna be long text',
      fullname: "Photoshop in depth",
      shortname: "Photoshop",
    },{
      category: 3,
      requested: "requested",
      enablecompletion: 'enablecompletion',
      completionnotify: 'completionmodify',
      summary: 'summary of course this is summary gonna be long text',
      fullname: "Angular 6",
      shortname: "Angular 6",
    },{
      category: 1,
      requested: "requested",
      enablecompletion: 'enablecompletion',
      completionnotify: 'completionmodify',
      summary: 'summary of course this is summary gonna be long text',
      fullname: "Digital Marketing",
      shortname: "Digital Marketing",
    },], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('Courses', {
      idnumber: "0001"
    }, {});
    
  }
};

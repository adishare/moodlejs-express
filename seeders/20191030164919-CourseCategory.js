'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('CourseCategories', [{
      name: "Komunikasi",
      idnumber: "001",
      description: "Deskripsi course category komunikasi",
      descriptionformat: 1,
      parent: null,
      sortorder: 1,
      coursecount: 0,
      visible: true,
      visibleold: false,
      timemodified: new Date().getTime(),
      depth: 1,
      path: 'communication',
      theme: 'edutect'
    },{
      name: "Development",
      idnumber: "002",
      description: "Deskripsi course category development",
      descriptionformat: 1,
      parent: null,
      sortorder: 1,
      coursecount: 0,
      visible: true,
      visibleold: false,
      timemodified: new Date().getTime(),
      depth: 1,
      path: 'development',
      theme: 'edutect'
    },{
      name: "Business",
      idnumber: "003",
      description: "Deskripsi course category business",
      descriptionformat: 1,
      parent: null,
      sortorder: 1,
      coursecount: 0,
      visible: true,
      visibleold: false,
      timemodified: new Date().getTime(),
      depth: 1,
      path: 'business',
      theme: 'edutect'
    },{
      name: "Design",
      idnumber: "004",
      description: "Deskripsi course category design",
      descriptionformat: 1,
      parent: null,
      sortorder: 1,
      coursecount: 0,
      visible: true,
      visibleold: false,
      timemodified: new Date().getTime(),
      depth: 1,
      path: 'design',
      theme: 'edutect'
    },{
      name: "Marketing",
      idnumber: "005",
      description: "Deskripsi course category marketing",
      descriptionformat: 1,
      parent: null,
      sortorder: 1,
      coursecount: 0,
      visible: true,
      visibleold: false,
      timemodified: new Date().getTime(),
      depth: 1,
      path: 'marketing',
      theme: 'edutect'
    },{
      name: "Finance",
      idnumber: "006",
      description: "Deskripsi course category finance",
      descriptionformat: 1,
      parent: null,
      sortorder: 1,
      coursecount: 0,
      visible: true,
      visibleold: false,
      timemodified: new Date().getTime(),
      depth: 1,
      path: 'finance',
      theme: 'edutect'
    }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('CourseCategories', {
      idnumber: "001"
    }, {});
    
  }
};

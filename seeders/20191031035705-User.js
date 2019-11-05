'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [{
      auth : "manual",
      policyagreed : true,
      deleted : false,
      confirmed : true,
      suspended : false,
      mnehostid : 1000,
      username : "kosasih",
      password : "kosasih",
      idnumber : 1000,
      firstname : "semmi",
      lastname : "kosasih",
      email : "semmi@kosasih.com",
      emailstop : false,
      facebook : "semmi.kosasih",
      instagram : "semmi.kosasih",
      twitter : "semmi.kosasih",
      whatsapp : "085721192032",
      phone : "085721192032",
      institution : "metranet",
      department : "digital",
      address : "Pancoran",
      city : "Bandung",
      country : "Indonesia",
      lang : "English",
      calendartype : "Georgian",
      theme : "edutec",
      timezone : "INA",
      firstaccess : new Date().getTime(),
      lastaccess : new Date().getTime(),
      lastlogin : new Date().getTime(),
      currentlogin : new Date().getTime(),
      lastip : "172.0.0.1",
      secret : "kosasih",
      picture : 1000,
      url : "www.google.com",
      description : "req.body.description",
      descriptionformat : "raw",
      mailformat : true,
      maildigest : true,
      maildisplay : 1000,
      autosubscribe : true,
      trackforum : false,
      timecreated : new Date().getTime(),
      timemodified : new Date().getTime(),
      trustbitmask : 255,
      imgalt : "kosasih.jpg",
      lastnamephonetic : "kosasih",
      firstnamephonetic : "kosasih",
      middlename : "kosasih",
      alternatename : "kosasih"
    }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('Users', {
      username: "kosasih"
    }, {});
    
  }
};

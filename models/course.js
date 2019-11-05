'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    category: {
      type: DataTypes.INTEGER,
      // allowNull: false
    },
    sortorder: DataTypes.INTEGER,
    startdate: DataTypes.BIGINT,
    enddate: DataTypes.BIGINT,
    marker: DataTypes.INTEGER,
    maxbytes: DataTypes.INTEGER,
    defaultgroupingid: DataTypes.INTEGER,
    timecreated: DataTypes.BIGINT,
    timemodified: DataTypes.BIGINT,
    cacherev: DataTypes.INTEGER,
    visible: DataTypes.BOOLEAN,
    visibleold: DataTypes.BOOLEAN,
    requested: DataTypes.STRING,
    enablecompletion: DataTypes.STRING,
    completionnotify: DataTypes.STRING,
    summary: DataTypes.STRING,
    newsitems: DataTypes.INTEGER,
    legacyfiles: DataTypes.INTEGER,
    showreports: DataTypes.INTEGER,
    groupmode: DataTypes.INTEGER,
    groupmodeforce: DataTypes.INTEGER,
    summaryformat: DataTypes.INTEGER,
    showgrades: DataTypes.INTEGER,
    fullname: DataTypes.STRING,
    shortname: DataTypes.STRING,
    idnumber: DataTypes.STRING,
    format: DataTypes.STRING,
    lang: DataTypes.STRING,
    calendartype: DataTypes.STRING,
    theme: DataTypes.STRING
  }, {
    timestamps: false,
  });
  Course.associate = function(models) {
    Course.belongsTo(models.CourseCategory, {foreignKey: 'category'});
  };
  return Course;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const CourseCategory = sequelize.define('CourseCategory', {
    name: DataTypes.STRING,
    idnumber: DataTypes.STRING,
    description: DataTypes.STRING,
    descriptionformat: DataTypes.INTEGER,
    parent: { type: DataTypes.INTEGER, allowNull: true },
    sortorder: DataTypes.INTEGER,
    coursecount: DataTypes.INTEGER,
    visible: DataTypes.BOOLEAN,
    visibleold: DataTypes.BOOLEAN,
    timemodified: DataTypes.BIGINT,
    depth: DataTypes.INTEGER,
    path: DataTypes.STRING,
    theme: DataTypes.STRING
  }, {
    timestamps: false,
  });
  CourseCategory.associate = function(models) {
    CourseCategory.hasMany(models.Course, { foreignKey: 'category', sourceKey: 'id'})
    CourseCategory.hasMany(CourseCategory, {as: 'childrenCategory', foreignKey: 'parent'});
    CourseCategory.belongsTo(CourseCategory, {as: 'parentCategory', foreignKey: 'parent'});
  };
  return CourseCategory;
};
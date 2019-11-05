const express = require('express');
const router = express.Router();

//Required routes
const UserRoute = require('./User');
const CourseRoute = require('./Course');
const CourseCategoryRoute = require('./CourseCategory');

//Registered routes
router.use('/users', UserRoute);
router.use('/courses', CourseRoute);
router.use('/courseCategories', CourseCategoryRoute);


module.exports = router;
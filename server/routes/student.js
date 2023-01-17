const express = require("express");
const router = express.Router();

const { getStudents, addStudent, deleteStudent, updateStudent, getStudentByid } = require('../Controllers/studentController');

router.route('/').get(getStudents).post(addStudent);
router.route('/:id').delete(deleteStudent).put(updateStudent).get(getStudentByid);


module.exports = router;


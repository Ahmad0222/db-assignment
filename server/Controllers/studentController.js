const asyncHandler = require('express-async-handler')
const Student = require('../Models/Student')

// @desc    Fetch all students
// @route   GET /api/student
// @access  Public
const getStudents = asyncHandler(async (req, res) => {
    const students = await Student.find({})
    res.json(students)
})


const addStudent = asyncHandler( async (req, res) => {
    const { registration, name, department, session, cgpa, address } = req.body
    const studentExists = await Student.findOne({ registration })
    if (studentExists) {
        res.status(400)
        throw new Error('Student already exists')
    }
    const student = await Student.create({ 
        registration, 
        name,
        department,
        session,
        cgpa,
        address

    })
    if (student) {
        res.status(201).json({
            _id: student._id,
            registration: student.registration,
            name: student.name,
            department: student.department,
            session: student.session,
            cgpa: student.cgpa,
            address: student.address
        })
    }
    else {
        res.status(400)
        throw new Error('Invalid student data')
    }
})


const updateStudent = asyncHandler(async (req, res) => {
    const { registration, name, department, session, cgpa, address } = req.body
    const student = await Student.findById(req.params.id)
    if (student) {
        student.registration = registration
        student.name = name
        student.department = department
        student.session = session
        student.cgpa = cgpa
        student.address = address
        const updatedStudent = await student.save()
        res.json({
            _id: updatedStudent._id,
            registration: updatedStudent.registration,
            name: updatedStudent.name,
            department: updatedStudent.department,
            session: updatedStudent.session,
            cgpa: updatedStudent.cgpa,
            address: updatedStudent.address
        })
    }
    else {
        res.status(404)
        throw new Error('Student not found')
    }
}
)

const deleteStudent = asyncHandler(async (req, res) => {
    const student = await Student.findById(req.params.id)
    if (student) {
        await student.remove()
        res.json({ message: 'Student removed' })
    }
    else {
        res.status(404)
        throw new Error('Student not found')
    }
});

const getStudentByid =  asyncHandler(async (req, res) => {
    const student = await Student.findById(req.params.id)
    if (student) {
        res.json(student)
    }
    else {
        res.status(404)
        throw new Error('Student not found')
    }

})


module.exports = { getStudents, addStudent, deleteStudent, updateStudent, getStudentByid }
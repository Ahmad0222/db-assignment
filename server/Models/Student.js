const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    registration : {
        type: String,
        required: true
        
    },
    name: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    session: {
        type: Number,
        required: true
    },
    cgpa:{
        type: Number,
        required: true
    },
    address:{
        type: String,
        required: true
    }

});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;

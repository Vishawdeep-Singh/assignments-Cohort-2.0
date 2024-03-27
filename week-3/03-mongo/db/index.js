const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://vishawdeepsingh29:2ONGGZEGPELLNs3N@cluster0.vovi9j4.mongodb.net/udemy');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username : String,
    password : String
});

const UserSchema = new mongoose.Schema({
    username : String,
    password : String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    title : String,
     description : String,
     price : Number,
     imageLink : String,
    published : { type:Boolean, default: false }

});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}
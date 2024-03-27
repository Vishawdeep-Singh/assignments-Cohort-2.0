const { Router } = require("express");
const { Admin, Course } = require("../db");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const admin = await Admin.create({
        username :  username,
        password : password
    })
    admin.save();

    res.json({
       "message" : "Admin Created Successfully"
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const {title , description, price , imageLink,published} =  req.body;
    const course =  await Course.create({
        title : title,
        description :  description,
        price:price,
        imageLink : imageLink,
        published : published
    })
    try{
        const savedCourse = await course.save();
        try{
           const update = Course.updateOne({ _id: savedCourse._id },{published : true} ); 
        }
        catch(err){
            res.json({
               "msg" : "cannot published"
            })
        }
        
        res.json({ "message": 'Course created successfully', "courseId": `${savedCourse._id}` });
    }
    catch(err){
        res.json({
            "message" : "Error in saving new course"
        })
    }
   
    
});

router.get('/courses', adminMiddleware, async (req, res) => {
    const response = await Course.find({});

    res.json({
        courses: response
    })
});

module.exports = router;
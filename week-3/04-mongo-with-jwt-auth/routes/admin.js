const { Router, json } = require("express");
const { Admin, Course } = require("../db");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt = require("jsonwebtoken");
const JWT_pass = "shhhh";


// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
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

router.post('/signin',  async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
   const response =  await Admin.findOne({
        username: username,
        password: password
    });
    if(!response){
        res.status(403).json({
            msg: "Admin doesnt exist"
        })
    }
   else{
    var token = jwt.sign(username,JWT_pass);
    res.json({
        token : token
    }
        
    )
   } 
});

router.post('/courses', adminMiddleware, async(req, res) => {
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
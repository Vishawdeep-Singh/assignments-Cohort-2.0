const { Router } = require("express");
const { User, Course } = require("../db");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require("jsonwebtoken");
const JWT_pass = "shhhh";

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    User.create({
        username,
        password
    })
    res.json({
        message: "User created successfully"
    })
});

router.post('/signin', async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;
   const response = await User.findOne({
        username: username,
        password: password
    });
    if(!response){
        res.status(403).json({
            msg: "User doesnt exist"
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

router.get('/courses',userMiddleware, async(req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.username;

    
    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseId // In Mongoose, when you define a schema field as mongoose.Schema.Types.ObjectId, Mongoose handles the conversion of string values to ObjectIds automatically when saving documents to the database.


        }
    })
    res.json({
        message: "Purchase complete!"
    })
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.username
    });
    try {
        console.log(user.purchasedCourses);
        const courses = await Course.find({
            _id: {
                "$in": user.purchasedCourses
            }
        });

        res.json({
            courses: courses
        })
    }
    catch (err) {
        console.log(err)
    }
});

module.exports = router
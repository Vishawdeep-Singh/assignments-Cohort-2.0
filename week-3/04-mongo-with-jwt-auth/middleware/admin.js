const jwt = require("jsonwebtoken");
const JWT_pass = "shhhh";

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const words = token.split(" "); // ["Bearer", "token"]
    const jwtToken = words[1]; // token

    try{
        const decodedValue = jwt.verify(jwtToken, JWT_pass);
       
        if (decodedValue) {
            next();
        } else {
            res.status(403).json({
                msg: "You are not authenticated"
            })
        }
    }
    catch(err){
        console.log(err);
        res.json({
            msg: "Incorrect inputs"
        })
    }
}

module.exports = adminMiddleware;
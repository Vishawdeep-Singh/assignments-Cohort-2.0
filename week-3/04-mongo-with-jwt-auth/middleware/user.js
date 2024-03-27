const jwt = require("jsonwebtoken");
const JWT_pass = "shhhh";

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const words = token.split(" "); // ["Bearer", "token"]
    const jwtToken = words[1]; // token
    try{
        const decodedValue = jwt.verify(jwtToken, JWT_pass);
        req.username=decodedValue;
        if (decodedValue) {
            next();
        } else {
            res.status(403).json({
                msg: "You are not authenticated"
            })
        }
    }
    catch(err){
        res.json({
            msg: "Incorrect inputs"
        })
    }
}

module.exports = userMiddleware;
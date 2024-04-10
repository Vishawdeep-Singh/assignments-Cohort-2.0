const mongoose = require("mongoose");

const cardsSchema = new mongoose.Schema({
    name : String,
    description : String,
    interests : {type: [String]},
    social : { type: Object, of: String }

})

const Cards = mongoose.model("Cards",cardsSchema);

module.exports={
    Cards
}
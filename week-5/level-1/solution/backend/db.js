const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://vishawdeepsingh29:DxzYlg9wcjGuHKGh@cluster0.vovi9j4.mongodb.net/Cards-App');
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
const express = require("express");
const app = express();
const cors = require("cors");
const { Cards } = require("./db");
app.use(cors());
app.use(express.json());


app.post("/card",async (req,res)=>{
    const inputs = req.body;
const card= await Cards.create({
    name : inputs.name,
    description : inputs.description,
    interests : inputs.interests,
    social : inputs.social

})
res.status(211).json(card);
});
app.get("/cards",async(req,res)=>{
    const cards = await Cards.find({});
    res.json({
        cards
    })
})
app.put("/cards/:id", (req,res)=>{
    const id = req.params.id;
    
    const updatedInfo = req.body;
  Cards.updateOne({_id:id},{
$set : updatedInfo
    }) .then(result => {
        res.status(200).send("Document updated successfully");
    })
    .catch(error => {
        console.error("Error updating document:", error);
        res.status(500).send("Error updating document");
    });
})
app.delete("/cards/:id",(req,res)=>{
    const id = req.params.id;
    Cards.deleteOne({_id:id})
    .then(result => {
        res.status(200).send("Document deleted successfully");
    })
    .catch(error => {
        console.error("Error deleting document:", error);
        res.status(500).send("Error deleting document");
    });
})
app.listen(3000);

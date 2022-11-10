const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://Vinuvarghese:06%4011993Univ@cluster0.xdoivax.mongodb.net/reactDB", {useNewUrlParser: true});

app.use("/", require("./routes/noteRoute"))

app.get("/", function(req,res){
  res.send("it's working");
})

app.listen(5000, function(){
  console.log("express server is running on port 5000");
})

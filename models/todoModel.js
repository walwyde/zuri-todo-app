const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Inventory:1234@product.lr0dq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  () => {
    console.log("connected to mongoose")
  }
);

// var Schema = mongoose.Schema

var TodoSchema = new mongoose.Schema({
  item: String,
  date: String
});

var todoModel = mongoose.model("TodoModel", TodoSchema);

module.exports = todoModel
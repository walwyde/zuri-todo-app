// const mongoose = require("mongoose");

// mongoose.connect(
//   "mongodb+srv://Inventory:1234@product.lr0dq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// );

//  var Schema = mongoose.Schema

// var TodoSchema = new mongoose.Schema({
//   item: String,
// });

// var todoModel = mongoose.model("TodoModel", TodoSchema);

const todoModel = require('../models/todoModel')
 
exports.getList = (req, res) => {
    // // get data from mongodb and render to display
    var item = req.body
    // var seconds = 9999; // Some arbitrary value
    // var dateprep = new Date(seconds * 1000); // multiply by 1000 because Date() requires miliseconds
    // var date = dateprep.toTimeString().split(' ')[0]
var date = new Date() + +new Date().getDay()
    todoModel.find({}, (err, data) => {
      
      if (err) throw err;
      res.render("todo", { todos: data, item:item, date:date});
    });
  }

  exports.postList = (req, res) => {
    var item = req.body

    var newTodo = todoModel(item).save((err, data) => {
      if (err) throw err;
      res.redirect('/todo');
    });
  }

  exports.deleteList = (req, res) => {
    var item = req.body.id

    todoModel.findById({_id : item}).deleteOne((err, data) => {
      if (err) throw err;
      res.redirect('/todo');
    });
  }

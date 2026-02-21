const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({

  title:{
    type:String,
    required:true
  },

  category:{
    type:String,
    required:true
  },

  description:{
    type:String
  },

  image:{
    type:String
  },

  views:{
  type:Number,
  default:0
},

  createdAt:{
    type:Date,
    default:Date.now
  }

});

module.exports = mongoose.model("Blog",blogSchema);
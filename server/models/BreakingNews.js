const mongoose = require("mongoose");

const breakingSchema = new mongoose.Schema({

  title:{
    type:String,
    required:true
  },
   link:{
    type:String,
    default:""
  },
  createdAt:{
    type:Date,
    default:Date.now
  }

});

module.exports = mongoose.model("BreakingNews",breakingSchema);
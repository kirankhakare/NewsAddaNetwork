const BreakingNews = require("../models/BreakingNews");

// ADD BREAKING NEWS
exports.addBreaking = async(req,res)=>{
  try{

    const news = await BreakingNews.create(req.body);
    res.json(news);

  }catch(err){
    res.status(500).json(err.message);
  }
};

// GET ALL BREAKING NEWS
exports.getBreaking = async(req,res)=>{
  try{

    const news = await BreakingNews.find().sort({createdAt:-1});
    res.json(news);

  }catch(err){
    res.status(500).json(err.message);
  }
};

// DELETE
exports.deleteBreaking = async(req,res)=>{
  try{

    await BreakingNews.findByIdAndDelete(req.params.id);
    res.json("Deleted");

  }catch(err){
    res.status(500).json(err.message);
  }
};
exports.updateBreaking = async(req,res)=>{
  try{

    const updated = await BreakingNews.findByIdAndUpdate(
      req.params.id,
      { title:req.body.title },
      { new:true }
    );

    res.json(updated);

  }catch(err){
    res.status(500).json(err.message);
  }
};
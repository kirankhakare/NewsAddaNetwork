const Visitor = require("../models/Visitor");
const Blog = require("../models/Blog");

// ================= VISITOR COUNT =================
exports.addVisitor = async(req,res)=>{
  try{

    let visitor = await Visitor.findOne();

    if(!visitor){
      visitor = await Visitor.create({count:1});
    }else{
      visitor.count += 1;
      await visitor.save();
    }

    res.json(visitor);

  }catch(err){
    res.status(500).json(err.message);
  }
};

// ================= BLOG VIEW COUNT =================
exports.addBlogView = async(req,res)=>{
  try{

    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      {$inc:{views:1}},
      {returnDocument:"after"}
    );

    res.json(blog);

  }catch(err){
    res.status(500).json(err.message);
  }
};
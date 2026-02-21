const Blog = require("../models/Blog");
const cloudinary = require("../config/cloudinary");
// CREATE BLOG

const getPublicId = (url)=>{
  if(!url) return null;

  const parts = url.split("/");
  const fileName = parts[parts.length - 1];
  const folder = parts[parts.length - 2];

  return `${folder}/${fileName.split(".")[0]}`;
};

exports.createBlog = async(req,res)=>{
  try{

    const blog = new Blog({

      title:req.body.title,
      category:req.body.category,
      description:req.body.description,

      // cloudinary image URL
      image:req.file ? req.file.path : null

    });

    await blog.save();

    res.json(blog);

  }catch(err){
    res.status(500).json(err.message);
  }
};


// ================= GET ALL BLOGS =================
exports.getBlogs = async(req,res)=>{
  try{

    const blogs = await Blog.find().sort({createdAt:-1});

    res.json(blogs);

  }catch(err){
    res.status(500).json(err.message);
  }
};


// ================= GET BY CATEGORY =================
exports.getCategoryBlogs = async (req,res)=>{
  try{

    const blogs = await Blog.find({
      category: req.params.slug   // <-- exact match पाहिजे
    }).sort({createdAt:-1});

    res.json(blogs);

  }catch(err){
    res.status(500).json(err);
  }
}


// ================= UPDATE BLOG =================
exports.updateBlog = async(req,res)=>{
  try{

    const blog = await Blog.findById(req.params.id);

    if(!blog){
      return res.status(404).json("Blog not found");
    }

    const updatedData = {
      title:req.body.title,
      category:req.body.category,
      description:req.body.description
    };

    // ================= IMAGE REPLACE LOGIC =================
    if(req.file){

      // DELETE OLD IMAGE FROM CLOUDINARY
      if(blog.image){
        const publicId = getPublicId(blog.image);
        await cloudinary.uploader.destroy(publicId);
      }

      // SAVE NEW IMAGE
      updatedData.image = req.file.path;
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      updatedData,
      {
        returnDocument:"after",
        runValidators:true
      }
    );

    res.json(updatedBlog);

  }catch(err){
    res.status(500).json(err.message);
  }
};

exports.getSingleBlog = async(req,res)=>{
  try{

    const blog = await Blog.findById(req.params.id);

    res.json(blog);

  }catch(err){
    res.status(500).json(err.message);
  }
};

// ================= DELETE BLOG =================
exports.deleteBlog = async(req,res)=>{
  try{

    await Blog.findByIdAndDelete(req.params.id);

    res.json("Deleted");

  }catch(err){
    res.status(500).json(err.message);
  }
};
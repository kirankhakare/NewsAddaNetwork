const Blog = require("../models/Blog");
const BreakingNews = require("../models/BreakingNews");
const Visitor = require("../models/Visitor");

exports.getDashboardStats = async(req,res)=>{
  try{

    // ================= TOTAL BLOGS =================
    const totalBlogs = await Blog.countDocuments();

    // ================= BREAKING NEWS =================
    let breakingCount = 0;
    if(BreakingNews){
      breakingCount = await BreakingNews.countDocuments();
    }

    // ================= CATEGORY WISE COUNT =================
    const categoryStats = await Blog.aggregate([
      {
        $group:{
          _id:"$category",
          count:{ $sum:1 }
        }
      }
    ]);

    // ================= VISITOR COUNT (LIVE) =================
    let visitors = 0;
    const visitorData = await Visitor.findOne();
    if(visitorData){
      visitors = visitorData.count;
    }

    // ================= TOTAL BLOG VIEWS =================
    const totalViewsAgg = await Blog.aggregate([
      {
        $group:{
          _id:null,
          total:{ $sum:"$views" }
        }
      }
    ]);

    const totalViews = totalViewsAgg.length
      ? totalViewsAgg[0].total
      : 0;

    // ================= RESPONSE =================
    res.json({
      totalBlogs,
      breakingCount,
      categoryStats,
      visitors,
      totalViews
    });

  }catch(err){
    console.log(err);
    res.status(500).json(err.message);
  }
};
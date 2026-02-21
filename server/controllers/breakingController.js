const BreakingNews = require("../models/BreakingNews");

// ================= ADD BREAKING NEWS =================
exports.addBreaking = async(req,res)=>{
  try{

    let { title, link } = req.body;

    // ✅ AUTO FIX LINK (optional but best)
    if(link && !link.startsWith("http")){
      link = "https://" + link;
    }

    const news = await BreakingNews.create({
      title,
      link
    });

    res.json(news);

  }catch(err){
    res.status(500).json(err.message);
  }
};

// ================= GET ALL BREAKING NEWS =================
exports.getBreaking = async(req,res)=>{
  try{

    const news = await BreakingNews.find().sort({createdAt:-1});
    res.json(news);

  }catch(err){
    res.status(500).json(err.message);
  }
};

// ================= DELETE =================
exports.deleteBreaking = async(req,res)=>{
  try{

    await BreakingNews.findByIdAndDelete(req.params.id);
    res.json("Deleted");

  }catch(err){
    res.status(500).json(err.message);
  }
};

// ================= UPDATE BREAKING NEWS =================
exports.updateBreaking = async(req,res)=>{
  try{

    let { title, link } = req.body;

    // ✅ AUTO FIX LINK
    if(link && !link.startsWith("http")){
      link = "https://" + link;
    }

    const updated = await BreakingNews.findByIdAndUpdate(
      req.params.id,
      {
        title,
        link     // 🔥 IMPORTANT ADD
      },
      { new:true }
    );

    res.json(updated);

  }catch(err){
    res.status(500).json(err.message);
  }
};
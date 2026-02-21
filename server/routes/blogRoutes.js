const router = require("express").Router();
const upload = require("../middleware/upload");
const {
  createBlog,
  getBlogs,
  getCategoryBlogs,
  updateBlog,
  getSingleBlog,
  deleteBlog
} = require("../controllers/blogController");

router.post("/", upload.single("image"), createBlog);

// ADD BLOG
router.post("/",createBlog);

// GET ALL BLOGS
router.get("/",getBlogs);

// GET CATEGORY WISE
router.get("/category/:slug",getCategoryBlogs);

// UPDATE
router.get("/:id",getSingleBlog);
router.put("/:id",upload.single("image"),updateBlog);

// DELETE
router.delete("/:id",deleteBlog);

module.exports = router;
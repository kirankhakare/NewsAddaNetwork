const router = require("express").Router();
const { addVisitor, addBlogView } = require("../controllers/analyticsController");

router.post("/visit", addVisitor);
router.post("/view/:id", addBlogView);

module.exports = router;
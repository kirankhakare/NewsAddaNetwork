const router = require("express").Router();

const {
  addBreaking,
  getBreaking,
  deleteBreaking,
  updateBreaking
} = require("../controllers/breakingController");

router.post("/",addBreaking);
router.get("/",getBreaking);
router.delete("/:id",deleteBreaking);
router.put("/:id",updateBreaking); 

module.exports = router;
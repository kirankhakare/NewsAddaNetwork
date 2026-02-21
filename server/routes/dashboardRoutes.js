const router = require("express").Router();
const { getDashboardStats } = require("../controllers/dashboardController");

router.get("/", getDashboardStats);

module.exports = router;
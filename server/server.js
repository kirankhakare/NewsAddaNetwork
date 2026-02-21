const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("MongoDB Connected"));

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/breaking", require("./routes/breakingRoutes"));
app.use("/api/blogs",require("./routes/blogRoutes"));
app.use("/api/dashboard", require("./routes/dashboardRoutes"));
app.use("/api/analytics", require("./routes/analyticsRoutes"));

app.get("/health",(req,res)=>{
  res.send("OK");
});

app.listen(process.env.PORT,()=>{
  console.log("Server running");
});
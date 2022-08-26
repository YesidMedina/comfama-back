const express = require("express");
const router = express.Router();
const  {informationsRoutes}  = require("./informations.routes");

router.use("/api/anime", informationsRoutes);


module.exports = { router };

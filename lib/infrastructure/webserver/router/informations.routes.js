const express = require("express");
const informationsRoutes = express.Router();
const {
  informationsFilter,
  informationsTotal,
  informationsScore
} = require("../../../interfaces/controllers/InformationsControllers");

informationsRoutes.get("/filter", informationsFilter);
informationsRoutes.get("/total", informationsTotal);
informationsRoutes.get("/score", informationsScore);

// informationsRoutes.get("/", (req, res) => {
//   res.send('Anime Api')
// });
module.exports = { informationsRoutes };

const {
  InformationsFilter,
  InformationsScore,
  InformationsTotal,
} = require("../../application/use_cases");

module.exports = {
  async informationsFilter(req, res, next) {
    try {
      const { q } = req.query;
      const resp = await InformationsFilter(q);
      next(resp);

      res.status(200).json(resp);
    } catch (error) {
      next(error);
    }
  },

  async informationsScore(req, res, next) {
    try {
      const { score } = req.query;
      const resp = await InformationsScore(score);

      next(resp);

      res.status(200).json(resp);
    } catch (error) {
      next(error);
    }
  },

  async informationsTotal(req, res, next) {
    try {
      const resp = await InformationsTotal();
      next(resp);

      res.status(200).json(resp);
    } catch (error) {
      next(error);
    }
  },
};

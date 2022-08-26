const { InformationsScoreRepository } = require("../../domain/repository");
const { ScoresExternal } = require("../../infrastructure/externalRepositories");
const informationsScoreRepository = new InformationsScoreRepository(
  new ScoresExternal()
);

module.exports = (score) =>  {
  return new Promise(async (resolve, reject) => {
    try {
      let message = "";

      if (score >= 1 && score <= 4) message = "I do not recommend it.";

      if (score >= 5 && score <= 7) message = "You may have fun.";

      if (score >= 7) message = "Great, this is one of the best anime.";

      resolve(message);
    } catch (error) {
      reject(error);
    }
  });
};

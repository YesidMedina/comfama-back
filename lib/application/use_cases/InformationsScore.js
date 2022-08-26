const { InformationsScoreRepository } = require("../../domain/repository");
const {
  ScoresExternal,
} = require("../../infrastructure/externalRepositories");
const informationsScoreRepository = new InformationsScoreRepository(new ScoresExternal());

module.exports = (score) => {
  return new Promise(async (resolve, reject) => {
    try {
      let message = ''
      
      if (score >= 1 && score <= 4) message = 'No recomendarlo'
      
      if (score >= 5 && score <= 7) message = 'Puede ser divertida'

      if(score >= 7) message = 'genial este es uno de los mejores animes'

      resolve(message)
    } catch (error) {
      reject(error)
    }
  })
};

const { InformationsScoreRepository } = require("../../domain/repository");
const {
  ScoresExternal,
} = require("../../infrastructure/externalRepositories");
const informationsScoreRepository = new InformationsScoreRepository(new ScoresExternal());

module.exports = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const message = ''
      const res = informationsScoreRepository.getInformationsScore(data)
        if(score < 4) {
          message = 'No es recomendada'
        }
      resolve(res)
    } catch (error) {
      reject(error)
    }
  })
};

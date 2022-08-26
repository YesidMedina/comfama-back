const { InformationsScoreRepository } = require("../../domain/repository");
const {
  ScoresExternal,
} = require("../../infrastructure/externalRepositories");
const informationsScoreRepository = new InformationsScoreRepository(new ScoresExternal());

module.exports = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = informationsScoreRepository.getInformationsScore()
      let score = ''
      console.log(score);

      if(score < 4) {
         score = 'no lo recomiendo'
      }
      if(score < 7 && data.score > 5) {
        score = 'puede ser divertido'
      }else {
        score = 'recomendado'
      }
      const data = {
        properties: {
          score
        },
      }
      resolve(res)
    } catch (error) {
      reject(error)
    }
  })
};

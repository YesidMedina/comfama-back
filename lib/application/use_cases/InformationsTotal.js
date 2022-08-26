const { InformationsTotalRepository } = require("../../domain/repository");
const {
  InformationsExternal,
} = require("../../infrastructure/externalRepositories");
const informationsTotalRepository = new InformationsTotalRepository(new InformationsExternal());

module.exports = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = informationsTotalRepository.getInformationsTotal()
      resolve(res)
    } catch (error) {
      reject(error)
    }
  })
};

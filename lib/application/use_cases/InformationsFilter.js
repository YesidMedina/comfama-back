const { InformationsRepository } = require("../../domain/repository");
const {
  FiltersExternal,
} = require("../../infrastructure/externalRepositories");
const informationsRepository = new InformationsRepository(
  new FiltersExternal()
);

module.exports = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await informationsRepository.getInformations(data);
      console.log(res);
      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};

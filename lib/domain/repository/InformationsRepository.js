 class InformationsRepository {
  constructor(repository) {
    this.repository = repository;
  }

  getInformations(data) {
    return this.repository.getInformations(data);
  }
};
 module.exports = {InformationsRepository}
module.exports = class {
    constructor(repository) {
      this.repository = repository;
    }
  
    getInformationsScore(data) {
      return this.repository.getInformationsScore(data);
    }
  };
  
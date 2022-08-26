module.exports = class {
    constructor(repository) {
      this.repository = repository;
    }
  
    getInformationsTotal(data) {
      return this.repository.getInformationsTotal(data);
    }
  };
  
const axios = require("axios");

const { ENDPOINT_ENTITIES } = process.env;

class FiltersExternal {
  async getInformations(query) {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axios.get(`${ENDPOINT_ENTITIES}?q=${query}`);

        resolve (data?.data.map((data) => ({
          title: data.title,
        })));
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }
}

module.exports = { FiltersExternal };

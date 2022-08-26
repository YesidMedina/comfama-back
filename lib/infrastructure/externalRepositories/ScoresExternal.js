const axios = require("axios");

const { ENDPOINT_ENTITIES } = process.env;

class ScoresExternal {
    getInformationsScore(query) {
      return new Promise(async (resolve, reject) => {
        try {
          const { data } = await axios.get(`${ENDPOINT_ENTITIES}?q=${query}`);
          resolve (data?.data.map((data) => ({
            id: data.id,
            title: data.score,
          })));
        } catch (error) {
          console.log(error);
          reject(error);
        }
      });
    }
  }
  
  module.exports = { ScoresExternal };

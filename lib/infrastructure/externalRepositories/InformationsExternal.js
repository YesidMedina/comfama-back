const axios = require("axios");

const { ENDPOINT_ENTITIES } = process.env;

class InformationsExternal {
  getInformationsTotal() {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axios.get(
          `${ ENDPOINT_ENTITIES }`
        );
        if (data) {
          resolve(data);
        }
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }
}

module.exports = { InformationsExternal };


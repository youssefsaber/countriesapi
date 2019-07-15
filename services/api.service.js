const axios = require('axios');
const { api_url } = require('../config');

const URLS = {
  getCountryByName: name => `${api_url}/name/${name}`
};

const searchCountry = async (name, fullText = false) => {
  try {
    const response = await axios.get(URLS.getCountryByName(name), { params: { fullText } });
    console.log('request', response.request);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const getCountries = async names => {
  try {
    const promises = [];
    for (const name of names) {
      // we send a request for each country and we catch the error if one of the countries doesn't exist
      promises.push(searchCountry(name).catch(err => console.log(err)));
    }
    let countries = await Promise.all(promises);
    //we filter null values for countries that weren't found and we return the result
    return countries.filter(country => !!country);
  } catch (err) {
    throw err.response.data;
  }
};

module.exports = {
  searchCountry,
  getCountries
};

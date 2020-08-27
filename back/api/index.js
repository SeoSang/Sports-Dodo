require('dotenv').config('../config/config.env');

const API_URL = 'https://api-football-v1.p.rapidapi.com/v2';
const API_KEY = process.env.API_KEY;

module.exports = {
  API_URL: API_URL,
  API_KEY: API_KEY,
};

const axios = require("axios");
const instance = axios.create({
  baseURL: "https://api.tvmaze.com",
});

export const axiosBackend = axios.create({
  baseURL: "https://moonbek-netflix-clone-backend.netlify.app/",
});

export default instance;

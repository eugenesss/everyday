import axios from "axios";

const api = axios.create({
  baseURL: "http://api.everydaycrm.sg/api"
  //baseURL: "http://localhost:3001/api",
  // timeout: 6000,
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem("accessKey");
  if (token) {
    config.url += `?access_token=${token}`;
  }
  return config;
});

export default api;

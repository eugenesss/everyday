import axios from "axios";

console.log(process.env.NODE_ENV);
const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "http://api.everydaycrm.sg/api"
      : "http://localhost:3001/api"
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

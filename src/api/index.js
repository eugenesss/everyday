import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api",
  timeout: 6000
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem("accessKey");
  config.url += `?access_token=${token}`;
  return config;
});

export default api;

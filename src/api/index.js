import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://api.everydaycrm.sg/api"
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

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.message === "Network Error") {
      // The user doesn't have internet
      return Promise.reject(error);
    }
    switch (error.response.status) {
      case 400:
        break;
      case 401:
        console.log('error 401, should replace url to /login')
        // if(window.location.pathname != "/login"){
        //   window.location.replace("/login");
        // }
        break;
      case 404:
        break;
      case 500:
        break;
      default:
        // Unknown Error
        break;
    }
    return Promise.reject(error);
  }
);

export default api;

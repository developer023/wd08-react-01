import axios from "axios";

export const axiosPrivate = axios.create({
  baseURL: "",
  withCredentials: true,
  timeout: 10000,
  validateStatus: (status) => status <= 300,
});

axiosPrivate.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem("accessToken") ||
      sessionStorage.getItem("accessToken");

    config.headers.Authorization = `Bearer ${token}`;
    console.log("CONFIG", config);
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
// axios.interceptors.response.use(
//   function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response;
//   },
//   function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
//   }
// );

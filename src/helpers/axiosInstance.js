import axios from "axios";

const axiosInstance = (history = null) => {
  const baseURL = "https://api.npoint.io/";
  let headers = {};

  headers["Content-Type"] = "application/json";

  if (localStorage.accessToken) {
    headers.api_key = localStorage.accessToken;
  }

  const axiosInstance = axios.create({
    baseURL: baseURL,
    headers,
  });

  axiosInstance.interceptors.response.use(
    (response) =>
      new Promise((resolve, reject) => {
        resolve(response);
      }),
    (error) => {
      if (!error.response) {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }

      if (error.response.status === 403) {
        localStorage.removeItem("token");
        if (history) {
          history.push("/");
        }
      } else {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
    }
  );

  return axiosInstance;
};
export default axiosInstance;

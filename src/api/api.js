import axios from "axios";
import { BASE_URL } from "../constants";
import { AUTH_HEADER_NAME } from "../constants/auth/auth";
import { getBearerToken } from "../utils/utils";

const createAPI = () => {
  const apiHeader = {
    "Content-Type": "application/json",
  };
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: 800000, 
    headers: apiHeader,
    
  });
  api.interceptors.request.use(async (config) => {
    config.onDownloadProgress = function (progressEvent) {
      var ProgressBarPercent = Math.round((progressEvent.loaded * 100) / progressEvent.total)
      localStorage.setItem("progressPercent", ProgressBarPercent);
      // return ProgressBarPercent;

    }
    const bearerToken = await getBearerToken();
    config.onUploadProgress= function(progressEvent) {
      var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
      localStorage.setItem("perdata", percentCompleted);
      // return percentCompleted;
   
    }

    // const currentLanguage = getCurrentLangauge();
    // config.headers[`${ACCEPT_LANGUAGE}`] = `${currentLanguage || 'en'}, en`;
    if (bearerToken) {
      config.headers[`${AUTH_HEADER_NAME}`] = `${bearerToken}`;
    }
    //  else if (!isGuestAllowed(config)) {
    //   return {
    //     ...config,
    //     cancelToken: new axios.CancelToken((cancel) => cancel('Cancel guest request')),
    //   };
    // }
    return config;
  });
  
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (401 === error?.response?.status || 403 === error?.response?.status || 400 === error?.response?.status) {
        // logout();
        console.log(error?.response.data, "error")
      }
      throw error?.response?.data;
    }
  );
  return api;
};

export default createAPI();

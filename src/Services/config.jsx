import axios from "axios";
import { DOMAIN_API, SPORT_LOCALSTORAGE, TOKEN } from "../Constants/index";
import { localStorageServices } from "./localStorageServices";
// import { store } from "../main";

export let Domain_State = axios.create({
  baseURL: DOMAIN_API,
  headers: {
    "Content-Type": TOKEN,
    // Authorization: `Bearer ${
    //   localStorageServices.getUser(SPORT_LOCALSTORAGE)?.accessToken
    // }`,
  },
});
Domain_State.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

Domain_State.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

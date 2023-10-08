import { SPORT_LOCALSTORAGE } from "../Constants";

export let localStorageServices = {
  setUser: (key, user) => {
    let dataJson = JSON.stringify(user);
    localStorage.setItem(key, dataJson);
  },
  getUser: (user) => {
    let dataJson = localStorage.getItem(user);
    return JSON.parse(dataJson);
  },
  removeUser: () => {
    localStorage.removeItem(SPORT_LOCALSTORAGE);
  },
};

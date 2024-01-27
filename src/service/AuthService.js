import axios from "axios";

const AUTH_BASE_URL = "http://localhost:8080/auth";

export const registerUser = (register) =>
  axios.post(AUTH_BASE_URL + "/register", register);

export const login = (userNameOrEmail, password) =>
  axios.post(AUTH_BASE_URL + "/login", { userNameOrEmail, password });

export const storeToken = (token) => localStorage.setItem("token", token);

export const getToken = () => localStorage.getItem("token");

export const saveLoggedInUser = (userName) =>
  sessionStorage.setItem("authenticatedUser", userName);

export const isUserLoggedIn = () => {
  const userName = sessionStorage.getItem("authenticatedUser");

  if (userName == null) {
    return false;
  } else {
    return true;
  }
};

export const getLoggedInUser = () => {
  const userName = sessionStorage.getItem("authenticatedUser");
  return userName;
};

export const logout = () => {
  localStorage.clear();
  sessionStorage.clear();
};

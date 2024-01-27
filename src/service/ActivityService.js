import axios from "axios";
import { getToken } from "./AuthService";

const BASE_URL = "http://localhost:8080/activities";

axios.interceptors.request.use(function (config) {
  config.headers["Authorization"] = getToken();
  return config;
}),
  function (error) {
    return Promise.reject(error);
  };

export const getActivities = () => axios.get(BASE_URL);

export const addActivity = (activity) => axios.post(BASE_URL, activity);

export const getActivity = (activityId) =>
  axios.get(BASE_URL + "/" + activityId);

export const updateActivity = (activityId, activity) =>
  axios.put(BASE_URL + "/" + activityId, activity);

export const deleteActivity = (activityId) =>
  axios.delete(BASE_URL + "/" + activityId);

export const completeActivity = (id) =>
  axios.patch(BASE_URL + "/" + id + "/complete");

export const inCompleteActivity = (id) =>
  axios.patch(BASE_URL + "/" + id + "/in-complete");

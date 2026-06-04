import axios from "axios";

const API_URL =
  "http://localhost:8080/api";

export const getAssets = async () =>
  axios.get(`${API_URL}/assets`);

export const getAlerts = async () =>
  axios.get(`${API_URL}/alerts`);

export const getAnalytics = async () =>
  axios.get(`${API_URL}/analytics`);
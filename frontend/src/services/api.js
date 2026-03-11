import axios from "axios";

const API = axios.create({
  baseURL: "https://unizoy-job-board-jaw9.onrender.com"
});

export default API;
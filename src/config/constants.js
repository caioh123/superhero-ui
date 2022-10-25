import axios from "axios";

const API = axios.create({
  baseURL: "https://www.superheroapi.com/api.php/",
});

export default API;

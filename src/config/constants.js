import axios from "axios";

const API = axios.create({
  baseURL: `https://www.superheroapi.com/api.php/${process.env.REACT_APP_KEY_API}`,
});

export default API;

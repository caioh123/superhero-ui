import axios from "axios";

const localAPI = axios.create({
  baseURL: `http://www.localhost:7000`,
});

export default localAPI;

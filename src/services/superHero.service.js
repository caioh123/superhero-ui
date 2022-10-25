import config from "../config/constants";
import API from "../config/constants";

export async function getHeroes() {
  const result = await API.get("/1");
  return result;
}

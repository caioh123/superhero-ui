import API from "./api";

export async function getHeroes(heroName) {
  const result = await API.get(`/search/${heroName}`);

  return result;
}

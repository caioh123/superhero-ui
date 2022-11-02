import localAPI from "./localApi";

export async function getGroups() {
  const result = await localAPI.get(`/grupos`);

  return result;
}

export async function getSingleGroup(id) {
  const result = await localAPI.get(`/grupos/${id}`);

  return result;
}

export async function updateGroup(id, payload) {
  const result = await localAPI.put(`/grupos/${id}`, payload);

  return result;
}

export async function createNewGroup(payload) {
  const result = await localAPI.post("/grupos", payload);

  return result;
}

export async function deleteGroup(id) {
  const result = await localAPI.delete(`/grupos/${id}`);

  return result;
}

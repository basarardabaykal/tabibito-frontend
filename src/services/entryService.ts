import { api } from "./api";

export async function readEntries() {
  const response = await api.get("/entries");
  return response.data;
}

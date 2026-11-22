import type { NewEntry } from "../models/Entry";
import { api } from "./api";

export async function readEntries() {
  const response = await api.get("/entries");
  return response.data;
}

export async function readEntry(id: string) {
  const response = await api.get(`/entry/${id}`);
  return response.data.data;
}

export async function createEntry(new_entry: NewEntry) {
  await api.post("/entry", new_entry);
}

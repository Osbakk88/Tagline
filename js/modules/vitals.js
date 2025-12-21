import { Storage } from "./storage.js";

const STORAGE_KEY = "huskelista_vitals";

export const Vitals = {
  getAll() {
    return Storage.get(STORAGE_KEY) || [];
  },

  add(vital) {
    const vitals = this.getAll();
    const newVital = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      ...vital,
    };
    vitals.unshift(newVital);
    Storage.set(STORAGE_KEY, vitals);
    return newVital;
  },

  delete(id) {
    const vitals = this.getAll();
    const filtered = vitals.filter((v) => v.id !== id);
    Storage.set(STORAGE_KEY, filtered);
  },
};

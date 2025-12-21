import { Storage } from "./storage.js";

const STORAGE_KEY = "huskelista_medications";

export const Medications = {
  getAll() {
    return Storage.get(STORAGE_KEY) || [];
  },

  add(med) {
    const medications = this.getAll();
    const newMed = {
      id: Date.now().toString(),
      name: med.name,
      schedule: med.schedule, // 'morning', 'evening', 'daily'
      reminder: med.reminder || false,
      createdAt: new Date().toISOString(),
    };
    medications.push(newMed);
    Storage.set(STORAGE_KEY, medications);
    return newMed;
  },

  delete(id) {
    let medications = this.getAll();
    medications = medications.filter((med) => med.id !== id);
    Storage.set(STORAGE_KEY, medications);
  },
};

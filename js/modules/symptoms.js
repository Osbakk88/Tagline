import { Storage } from "./storage.js";

const STORAGE_KEY = "huskelista_symptoms";

export const Symptoms = {
  getAll() {
    return Storage.get(STORAGE_KEY) || [];
  },

  add(symptom) {
    const symptoms = this.getAll();
    const newSymptom = {
      id: Date.now().toString(),
      name: symptom.name,
      date: symptom.date || new Date().toISOString(),
      severity: symptom.severity,
      notes: symptom.notes,
      createdAt: new Date().toISOString(),
    };
    symptoms.unshift(newSymptom); // Add to top
    Storage.set(STORAGE_KEY, symptoms);
    return newSymptom;
  },

  delete(id) {
    const symptoms = this.getAll();
    const filtered = symptoms.filter((s) => s.id !== id);
    Storage.set(STORAGE_KEY, filtered);
  },
};

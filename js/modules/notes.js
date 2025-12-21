import { Storage } from "./storage.js";

const STORAGE_KEY = "huskelista_notes";

export const Notes = {
  getAll() {
    return Storage.get(STORAGE_KEY) || [];
  },

  add(note) {
    const notes = this.getAll();
    const newNote = {
      id: Date.now().toString(),
      content: note.content,
      linkedAppointmentId: note.linkedAppointmentId || null,
      createdAt: new Date().toISOString(),
    };
    notes.unshift(newNote); // Newest first
    Storage.set(STORAGE_KEY, notes);
    return newNote;
  },

  delete(id) {
    let notes = this.getAll();
    notes = notes.filter((note) => note.id !== id);
    Storage.set(STORAGE_KEY, notes);
  },

  update(id, content) {
    const notes = this.getAll();
    const index = notes.findIndex((note) => note.id === id);
    if (index !== -1) {
      notes[index].content = content;
      notes[index].updatedAt = new Date().toISOString();
      Storage.set(STORAGE_KEY, notes);
      return notes[index];
    }
    return null;
  },
};

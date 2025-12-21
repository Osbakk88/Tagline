import { Storage } from "./storage.js";

const STORAGE_KEY = "huskelista_contacts";

export const Contacts = {
  getAll() {
    return Storage.get(STORAGE_KEY) || [];
  },

  add(contact) {
    const contacts = this.getAll();
    const newContact = {
      id: Date.now().toString(),
      name: contact.name,
      role: contact.role,
      phone: contact.phone,
      email: contact.email,
      notes: contact.notes,
      createdAt: new Date().toISOString(),
    };
    contacts.push(newContact);
    Storage.set(STORAGE_KEY, contacts);
    return newContact;
  },

  delete(id) {
    const contacts = this.getAll();
    const filtered = contacts.filter((c) => c.id !== id);
    Storage.set(STORAGE_KEY, filtered);
  },
};

import { Storage } from "./storage.js";

const STORAGE_KEY = "huskelista_documents";

export const Documents = {
  getAll() {
    return Storage.get(STORAGE_KEY) || [];
  },

  add(doc) {
    const documents = this.getAll();
    const newDoc = {
      id: Date.now().toString(),
      name: doc.name,
      category: doc.category || "Uncategorized",
      fileData: doc.fileData, // Base64 string (careful with size)
      type: doc.type,
      createdAt: new Date().toISOString(),
    };
    documents.unshift(newDoc);
    Storage.set(STORAGE_KEY, documents);
    return newDoc;
  },

  delete(id) {
    let documents = this.getAll();
    documents = documents.filter((doc) => doc.id !== id);
    Storage.set(STORAGE_KEY, documents);
  },
};

/**
 * Simple wrapper for LocalStorage to handle data persistence.
 */
export const Storage = {
  get(key) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (e) {
      console.error("Error reading from localStorage", e);
      emitStorageError("read", e);
      return null;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.error("Error saving to localStorage", e);
      emitStorageError("save", e);
      return false;
    }
  },

  remove(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (e) {
      console.error("Error removing from localStorage", e);
      emitStorageError("remove", e);
      return false;
    }
  },
};

function emitStorageError(operation, error) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("storageError", {
        detail: {
          operation,
          name: error?.name || "StorageError",
        },
      }),
    );
  }
}

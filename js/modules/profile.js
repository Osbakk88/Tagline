import { Storage } from "./storage.js";

const STORAGE_KEY = "huskelista_profile";

export const Profile = {
  get() {
    return (
      Storage.get(STORAGE_KEY) || {
        name: "",
        dob: "",
        bloodType: "",
        allergies: "",
        emergencyName: "",
        emergencyPhone: "",
      }
    );
  },

  save(data) {
    Storage.set(STORAGE_KEY, data);
    return data;
  },
};

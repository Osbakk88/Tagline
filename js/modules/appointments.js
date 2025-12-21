import { Storage } from "./storage.js";

const STORAGE_KEY = "huskelista_appointments";

export const Appointments = {
  getAll() {
    return Storage.get(STORAGE_KEY) || [];
  },

  add(appointment) {
    const appointments = this.getAll();
    const newAppointment = {
      id: Date.now().toString(),
      ...appointment,
      createdAt: new Date().toISOString(),
    };
    appointments.push(newAppointment);
    // Sort by date
    appointments.sort((a, b) => new Date(a.date) - new Date(b.date));
    Storage.set(STORAGE_KEY, appointments);
    return newAppointment;
  },

  delete(id) {
    let appointments = this.getAll();
    appointments = appointments.filter((app) => app.id !== id);
    Storage.set(STORAGE_KEY, appointments);
  },

  update(id, updatedData) {
    const appointments = this.getAll();
    const index = appointments.findIndex((app) => app.id === id);
    if (index !== -1) {
      appointments[index] = { ...appointments[index], ...updatedData };
      appointments.sort((a, b) => new Date(a.date) - new Date(b.date));
      Storage.set(STORAGE_KEY, appointments);
      return appointments[index];
    }
    return null;
  },

  addBatch(newAppointments) {
    const appointments = this.getAll();
    const timestamp = Date.now();

    newAppointments.forEach((app, index) => {
      appointments.push({
        id: (timestamp + index).toString(),
        ...app,
        createdAt: new Date().toISOString(),
      });
    });

    appointments.sort((a, b) => new Date(a.date) - new Date(b.date));
    Storage.set(STORAGE_KEY, appointments);
  },
};

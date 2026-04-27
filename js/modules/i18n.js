import { Storage } from "./storage.js";

const STORAGE_KEY = "tagline_language";

const translations = {
  en: {
    // Navigation
    "nav.dashboard": "Dashboard",
    "nav.appointments": "Appointments",
    "nav.medications": "Medications",
    "nav.notes": "Notes",
    "nav.symptoms": "Symptoms",
    "nav.documents": "Documents",
    "nav.settings": "Settings",
    "nav.contacts": "Care Team",
    "nav.vitals": "Vitals",
    "nav.report": "Report",
    "nav.profile": "Profile",

    // General
    "app.title": "Tagline",
    "app.slogan": "Everything gathered. One place.",
    "btn.delete": "Delete",
    "btn.download": "Download",
    "btn.view": "View",
    "btn.close": "Close",
    "btn.save": "Save",
    loading: "Loading...",

    // Index
    "index.subtitle":
      "A calm, simple way to manage health appointments and notes.",
    "index.welcome": "Welcome",
    "index.description":
      "Tagline helps you keep track of appointments, notes, and documents without the stress. No clutter, just what you need.",
    "index.open": "Open My List",

    // Dashboard
    "dashboard.upcoming": "Upcoming Appointments",
    "dashboard.recent_notes": "Recent Notes",
    "dashboard.view_all_appointments": "View All Appointments",
    "dashboard.view_all_notes": "View All Notes",
    "dashboard.no_appointments": "No upcoming appointments.",
    "dashboard.no_notes": "No notes yet.",
    "dashboard.resources": "External Resources",
    "dashboard.resources_desc": "Quick access to public health services.",

    // Appointments
    "appointments.add_new": "Add New Appointment",
    "appointments.import": "Import from Calendar",
    "appointments.import_desc":
      "Upload an .ics file from your calendar (Google, Outlook, Helsenorge) to add appointments automatically.",
    "appointments.btn_import": "Select .ics File",
    "appointments.label.title": "Title",
    "appointments.placeholder.title": "e.g. Doctor Smith",
    "appointments.label.date": "Date & Time",
    "appointments.label.location": "Location",
    "appointments.placeholder.location": "e.g. City Hospital, Room 302",
    "appointments.label.notes": "Things to remember / ask",
    "appointments.placeholder.notes": "Questions for the doctor...",
    "appointments.btn.add": "Add Appointment",
    "appointments.upcoming": "Upcoming",
    "appointments.none": "No appointments scheduled.",
    "appointments.confirm_delete":
      "Are you sure you want to delete this appointment?",

    // Medications
    "medications.add_new": "Add Medication",
    "medications.label.name": "Medication Name",
    "medications.placeholder.name": "e.g. Paracetamol",
    "medications.label.schedule": "Schedule",
    "medications.schedule.morning": "Morning",
    "medications.schedule.evening": "Evening",
    "medications.schedule.daily": "Daily (Morning & Evening)",
    "medications.schedule.needed": "As Needed",
    "medications.label.reminder": "Enable Reminder (Visual only)",
    "medications.btn.add": "Add Medication",
    "medications.my_meds": "My Medications",
    "medications.none": "No medications added.",
    "medications.confirm_delete":
      "Are you sure you want to delete this medication?",
    "medications.reminder_active": "🔔 Reminder active",

    // Notes
    "notes.add_new": "Add New Note",
    "notes.label.content": "Note Content",
    "notes.placeholder.content": "Write your note here...",
    "notes.btn.save": "Save Note",
    "notes.my_notes": "My Notes",
    "notes.none": "No notes yet.",
    "notes.confirm_delete": "Are you sure you want to delete this note?",

    // Symptoms
    "symptoms.add_new": "Log Symptom",
    "symptoms.label.name": "Symptom",
    "symptoms.placeholder.name": "e.g. Headache, Nausea",
    "symptoms.label.date": "Date & Time",
    "symptoms.label.severity": "Severity",
    "symptoms.severity.mild": "Mild",
    "symptoms.severity.moderate": "Moderate",
    "symptoms.severity.severe": "Severe",
    "symptoms.label.notes": "Notes / Triggers",
    "symptoms.placeholder.notes": "e.g. After eating, stressed...",
    "symptoms.btn.add": "Log Symptom",
    "symptoms.recent": "Recent Symptoms",
    "symptoms.none": "No symptoms logged.",
    "symptoms.confirm_delete": "Are you sure you want to delete this entry?",

    // Documents
    "documents.upload": "Upload Document",
    "documents.warning":
      "Note: Files are stored in your browser. Large files may not be saved.",
    "documents.label.name": "Document Name",
    "documents.placeholder.name": "e.g. Hospital Letter Jan 2025",
    "documents.label.category": "Category",
    "documents.category.general": "General",
    "documents.category.hospital": "Hospital",
    "documents.category.nav": "NAV",
    "documents.category.prescriptions": "Prescriptions",
    "documents.label.file": "File (Image or PDF)",
    "documents.btn.save": "Save Document",
    "documents.stored": "Stored Documents",
    "documents.none": "No documents stored.",
    "documents.confirm_delete":
      "Are you sure you want to delete this document?",
    "documents.alert.too_large":
      "File is too large to store in the browser storage.",

    // Contacts
    "contacts.add_new": "Add Contact",
    "contacts.label.name": "Name",
    "contacts.placeholder.name": "e.g. Dr. Smith",
    "contacts.label.role": "Role / Specialty",
    "contacts.placeholder.role": "e.g. GP, Cardiologist",
    "contacts.label.phone": "Phone",
    "contacts.placeholder.phone": "123 45 678",
    "contacts.label.email": "Email",
    "contacts.placeholder.email": "doctor@clinic.com",
    "contacts.label.notes": "Notes",
    "contacts.placeholder.notes": "e.g. Opening hours...",
    "contacts.btn.add": "Save Contact",
    "contacts.my_team": "My Care Team",
    "contacts.none": "No contacts added.",
    "contacts.confirm_delete": "Are you sure you want to delete this contact?",

    // Vitals
    "vitals.log_new": "Log Vital Sign",
    "vitals.label.type": "Type",
    "vitals.type.blood_pressure": "Blood Pressure",
    "vitals.type.heart_rate": "Heart Rate",
    "vitals.type.weight": "Weight",
    "vitals.type.temperature": "Temperature",
    "vitals.type.blood_sugar": "Blood Sugar",
    "vitals.label.value": "Value",
    "vitals.placeholder.value": "e.g. 120/80",
    "vitals.label.date": "Date & Time",
    "vitals.label.notes": "Notes",
    "vitals.placeholder.notes": "e.g. Before breakfast...",
    "vitals.btn.add": "Log Entry",
    "vitals.history": "History",
    "vitals.none": "No vitals logged.",
    "vitals.confirm_delete": "Are you sure you want to delete this entry?",

    // Report
    "report.settings": "Report Settings",
    "report.range": "Time Range",
    "report.range.30": "Last 30 Days",
    "report.range.90": "Last 3 Months",
    "report.range.365": "Last Year",
    "report.range.all": "All Time",
    "report.print": "Print Report",
    "report.title": "Health Report",
    "report.generated": "Generated on",

    // Profile
    "profile.personal_info": "Personal Information",
    "profile.label.name": "Full Name",
    "profile.placeholder.name": "e.g. Ola Nordmann",
    "profile.label.dob": "Date of Birth",
    "profile.label.blood_type": "Blood Type",
    "profile.label.allergies": "Allergies / Medical Conditions",
    "profile.placeholder.allergies": "e.g. Penicillin, Peanuts...",
    "profile.emergency_contact": "Emergency Contact",
    "profile.label.emergency_name": "Contact Name",
    "profile.placeholder.emergency_name": "e.g. Kari Nordmann",
    "profile.label.emergency_phone": "Contact Phone",
    "profile.placeholder.emergency_phone": "123 45 678",
    "profile.saved": "Profile saved!",

    // Settings
    "settings.language": "Language",
    "settings.appearance": "Appearance",
    "settings.dark_mode": "Dark Mode",
    "settings.data_management": "Data Management",
    "settings.data_info": "All your data is stored locally on this device.",
    "settings.backup_info":
      "Backup includes appointments, medications, symptoms, vitals, contacts, notes, documents, profile, language and theme settings.",
    "settings.backup_privacy":
      "Keep backup files in a safe place, as they may contain sensitive health information.",
    "settings.btn.export": "Export Data",
    "settings.btn.import": "Import Data",
    "settings.btn.clear": "Clear All Data",
    "settings.about": "About",
    "settings.about_text": "A simple tool for managing health logistics.",
    "settings.confirm_clear":
      "WARNING: This will delete ALL your appointments, notes, and documents. This cannot be undone. Are you sure?",
    "settings.alert_cleared": "All data has been cleared.",
    "settings.alert_imported": "Data imported successfully.",
    "settings.alert_import_failed":
      "Could not import backup file. Please check that the file is valid.",
  },
  no: {
    // Navigation
    "nav.dashboard": "Oversikt",
    "nav.appointments": "Avtaler",
    "nav.medications": "Medisiner",
    "nav.notes": "Notater",
    "nav.symptoms": "Symptomer",
    "nav.documents": "Dokumenter",
    "nav.settings": "Innstillinger",
    "nav.contacts": "Behandlingsteam",
    "nav.vitals": "Målinger",
    "nav.report": "Rapport",
    "nav.profile": "Profil",

    // General
    "app.title": "Tagline",
    "app.slogan": "Alt samlet. Ett sted.",
    "btn.delete": "Slett",
    "btn.download": "Last ned",
    "btn.view": "Vis",
    "btn.close": "Lukk",
    "btn.save": "Lagre",
    loading: "Laster...",

    // Index
    "index.subtitle":
      "En rolig og enkel måte å holde oversikt over helseavtaler og notater.",
    "index.welcome": "Velkommen",
    "index.description":
      "Tagline hjelper deg å holde oversikt over avtaler, notater og dokumenter uten stress. Ingen rot, bare det du trenger.",
    "index.open": "Åpne min liste",

    // Dashboard
    "dashboard.upcoming": "Kommende avtaler",
    "dashboard.recent_notes": "Nylige notater",
    "dashboard.view_all_appointments": "Se alle avtaler",
    "dashboard.view_all_notes": "Se alle notater",
    "dashboard.no_appointments": "Ingen kommende avtaler.",
    "dashboard.no_notes": "Ingen notater ennå.",
    "dashboard.resources": "Eksterne ressurser",
    "dashboard.resources_desc": "Rask tilgang til offentlige helsetjenester.",

    // Appointments
    "appointments.add_new": "Legg til ny avtale",
    "appointments.import": "Importer fra kalender",
    "appointments.import_desc":
      "Last opp en .ics-fil fra kalenderen din (Google, Outlook, Helsenorge) for å legge til avtaler automatisk.",
    "appointments.btn_import": "Velg .ics-fil",
    "appointments.label.title": "Tittel",
    "appointments.placeholder.title": "f.eks. Dr. Hansen",
    "appointments.label.date": "Dato & Tid",
    "appointments.label.location": "Sted",
    "appointments.placeholder.location": "f.eks. Sykehuset, Rom 302",
    "appointments.label.notes": "Ting å huske / spørre om",
    "appointments.placeholder.notes": "Spørsmål til legen...",
    "appointments.btn.add": "Legg til avtale",
    "appointments.upcoming": "Kommende",
    "appointments.none": "Ingen avtaler planlagt.",
    "appointments.confirm_delete":
      "Er du sikker på at du vil slette denne avtalen?",

    // Medications
    "medications.add_new": "Legg til medisin",
    "medications.label.name": "Navn på medisin",
    "medications.placeholder.name": "f.eks. Paracet",
    "medications.label.schedule": "Tidsplan",
    "medications.schedule.morning": "Morgen",
    "medications.schedule.evening": "Kveld",
    "medications.schedule.daily": "Daglig (Morgen & Kveld)",
    "medications.schedule.needed": "Ved behov",
    "medications.label.reminder": "Aktiver påminnelse (kun visuelt)",
    "medications.btn.add": "Legg til medisin",
    "medications.my_meds": "Mine medisiner",
    "medications.none": "Ingen medisiner lagt til.",
    "medications.confirm_delete":
      "Er du sikker på at du vil slette denne medisinen?",
    "medications.reminder_active": "🔔 Påminnelse aktiv",

    // Notes
    "notes.add_new": "Legg til nytt notat",
    "notes.label.content": "Innhold",
    "notes.placeholder.content": "Skriv notatet ditt her...",
    "notes.btn.save": "Lagre notat",
    "notes.my_notes": "Mine notater",
    "notes.none": "Ingen notater ennå.",
    "notes.confirm_delete": "Er du sikker på at du vil slette dette notatet?",

    // Symptoms
    "symptoms.add_new": "Logg symptom",
    "symptoms.label.name": "Symptom",
    "symptoms.placeholder.name": "f.eks. Hodepine, Kvalme",
    "symptoms.label.date": "Dato & Tid",
    "symptoms.label.severity": "Alvorlighetsgrad",
    "symptoms.severity.mild": "Mild",
    "symptoms.severity.moderate": "Moderat",
    "symptoms.severity.severe": "Alvorlig",
    "symptoms.label.notes": "Notater / Utløsere",
    "symptoms.placeholder.notes": "f.eks. Etter måltid, stresset...",
    "symptoms.btn.add": "Logg symptom",
    "symptoms.recent": "Nylige symptomer",
    "symptoms.none": "Ingen symptomer logget.",
    "symptoms.confirm_delete":
      "Er du sikker på at du vil slette denne oppføringen?",

    // Documents
    "documents.upload": "Last opp dokument",
    "documents.warning":
      "Merk: Filer lagres i nettleseren din. Store filer blir kanskje ikke lagret.",
    "documents.label.name": "Dokumentnavn",
    "documents.placeholder.name": "f.eks. Brev fra sykehuset Jan 2025",
    "documents.label.category": "Kategori",
    "documents.category.general": "Generelt",
    "documents.category.hospital": "Sykehus",
    "documents.category.nav": "NAV",
    "documents.category.prescriptions": "Resepter",
    "documents.label.file": "Fil (Bilde eller PDF)",
    "documents.btn.save": "Lagre dokument",
    "documents.stored": "Lagrede dokumenter",
    "documents.none": "Ingen dokumenter lagret.",
    "documents.confirm_delete":
      "Er du sikker på at du vil slette dette dokumentet?",
    "documents.alert.too_large":
      "Filen er for stor til å lagres i nettleseren.",

    // Contacts
    "contacts.add_new": "Legg til kontakt",
    "contacts.label.name": "Navn",
    "contacts.placeholder.name": "f.eks. Dr. Hansen",
    "contacts.label.role": "Rolle / Spesialitet",
    "contacts.placeholder.role": "f.eks. Fastlege, Kardiolog",
    "contacts.label.phone": "Telefon",
    "contacts.placeholder.phone": "123 45 678",
    "contacts.label.email": "E-post",
    "contacts.placeholder.email": "lege@klinikk.no",
    "contacts.label.notes": "Notater",
    "contacts.placeholder.notes": "f.eks. Åpningstider...",
    "contacts.btn.add": "Lagre kontakt",
    "contacts.my_team": "Mitt behandlingsteam",
    "contacts.none": "Ingen kontakter lagt til.",
    "contacts.confirm_delete":
      "Er du sikker på at du vil slette denne kontakten?",

    // Vitals
    "vitals.log_new": "Logg måling",
    "vitals.label.type": "Type",
    "vitals.type.blood_pressure": "Blodtrykk",
    "vitals.type.heart_rate": "Puls",
    "vitals.type.weight": "Vekt",
    "vitals.type.temperature": "Temperatur",
    "vitals.type.blood_sugar": "Blodsukker",
    "vitals.label.value": "Verdi",
    "vitals.placeholder.value": "f.eks. 120/80",
    "vitals.label.date": "Dato & Tid",
    "vitals.label.notes": "Notater",
    "vitals.placeholder.notes": "f.eks. Før frokost...",
    "vitals.btn.add": "Logg oppføring",
    "vitals.history": "Historikk",
    "vitals.none": "Ingen målinger logget.",
    "vitals.confirm_delete":
      "Er du sikker på at du vil slette denne oppføringen?",

    // Report
    "report.settings": "Rapportinnstillinger",
    "report.range": "Tidsperiode",
    "report.range.30": "Siste 30 dager",
    "report.range.90": "Siste 3 måneder",
    "report.range.365": "Siste år",
    "report.range.all": "All tid",
    "report.print": "Skriv ut rapport",
    "report.title": "Helserapport",
    "report.generated": "Generert den",

    // Profile
    "profile.personal_info": "Personlig informasjon",
    "profile.label.name": "Fullt navn",
    "profile.placeholder.name": "f.eks. Ola Nordmann",
    "profile.label.dob": "Fødselsdato",
    "profile.label.blood_type": "Blodtype",
    "profile.label.allergies": "Allergier / Medisinske tilstander",
    "profile.placeholder.allergies": "f.eks. Penicillin, Peanøtter...",
    "profile.emergency_contact": "Nødkontakt",
    "profile.label.emergency_name": "Navn på kontakt",
    "profile.placeholder.emergency_name": "f.eks. Kari Nordmann",
    "profile.label.emergency_phone": "Telefon til kontakt",
    "profile.placeholder.emergency_phone": "123 45 678",
    "profile.saved": "Profil lagret!",

    // Settings
    "settings.language": "Språk",
    "settings.appearance": "Utseende",
    "settings.dark_mode": "Mørk modus",
    "settings.data_management": "Datahåndtering",
    "settings.data_info": "All data lagres lokalt på denne enheten.",
    "settings.backup_info":
      "Backup inkluderer avtaler, medisiner, symptomer, målinger, kontakter, notater, dokumenter, profil, språk og temainnstillinger.",
    "settings.backup_privacy":
      "Oppbevar backup-filer trygt, siden de kan inneholde sensitiv helseinformasjon.",
    "settings.btn.export": "Eksporter data",
    "settings.btn.import": "Importer data",
    "settings.btn.clear": "Slett all data",
    "settings.about": "Om",
    "settings.about_text": "Et enkelt verktøy for å håndtere helselogistikk.",
    "settings.confirm_clear":
      "ADVARSEL: Dette vil slette ALLE dine avtaler, notater og dokumenter. Dette kan ikke angres. Er du sikker?",
    "settings.alert_cleared": "All data er slettet.",
    "settings.alert_imported": "Data ble importert.",
    "settings.alert_import_failed":
      "Kunne ikke importere backup-fil. Sjekk at filen er gyldig.",
  },
};

export const I18n = {
  currentLang: "en",

  init() {
    const savedLang = Storage.get(STORAGE_KEY);
    this.currentLang = savedLang || "en";
    this.apply();
  },

  setLanguage(lang) {
    if (translations[lang]) {
      this.currentLang = lang;
      Storage.set(STORAGE_KEY, lang);
      this.apply();
      // Dispatch event so other components can react if needed
      window.dispatchEvent(
        new CustomEvent("languageChanged", { detail: { language: lang } }),
      );
    }
  },

  get(key) {
    return translations[this.currentLang][key] || key;
  },

  apply() {
    // Update text content
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[this.currentLang][key]) {
        el.textContent = translations[this.currentLang][key];
      }
    });

    // Update placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (translations[this.currentLang][key]) {
        el.placeholder = translations[this.currentLang][key];
      }
    });

    // Update html lang attribute
    document.documentElement.lang = this.currentLang;
  },
};

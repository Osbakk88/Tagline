/**
 * Main Application Entry Point
 */
import { Storage } from "./modules/storage.js";
import { I18n } from "./modules/i18n.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Tagline App Initialized");

  // Initialize I18n
  I18n.init();

  // Initialize Dark Mode
  const savedTheme = Storage.get("huskelista_theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  // Highlight active navigation link
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href");
    if (linkPath === currentPath) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  // Hamburger Menu Toggle
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      nav.classList.toggle("active");
    });
  }

  // Language Toggle
  const langToggle = document.querySelector(".lang-toggle");

  function updateLangButton() {
    if (langToggle) {
      const currentLang = I18n.currentLang;
      // If current is 'en', button should show 'NO' (switch to Norwegian)
      // If current is 'no', button should show 'EN' (switch to English)
      langToggle.textContent = currentLang === "en" ? "NO" : "EN";
    }
  }

  if (langToggle) {
    updateLangButton();

    langToggle.addEventListener("click", () => {
      const newLang = I18n.currentLang === "en" ? "no" : "en";
      I18n.setLanguage(newLang);
      updateLangButton();
    });

    // Listen for language changes from other sources (e.g. settings page)
    window.addEventListener("languageChanged", () => {
      updateLangButton();
    });
  }
});

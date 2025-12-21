/**
 * Main Application Entry Point
 */
import { Storage } from "./modules/storage.js";
import { I18n } from "./modules/i18n.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Huskelista App Initialized");

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
});

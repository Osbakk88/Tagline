/**
 * Main Application Entry Point
 */
import { Storage } from "./modules/storage.js";
import { I18n } from "./modules/i18n.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Tagline App Initialized");

  // Initialize I18n
  I18n.init();

  const PENDING_MESSAGE_KEY = "tagline_app_message";

  let messageHideTimeout;

  const showAppMessage = (message, variant = "error") => {
    let messageElement = document.getElementById("app-message");

    if (!messageElement) {
      messageElement = document.createElement("div");
      messageElement.id = "app-message";
      messageElement.className = "app-message";
      messageElement.setAttribute("role", "status");
      messageElement.setAttribute("aria-live", "polite");
      document.body.appendChild(messageElement);
    }

    messageElement.textContent = message;
    messageElement.className = `app-message app-message--${variant} app-message--visible`;

    window.clearTimeout(messageHideTimeout);
    messageHideTimeout = window.setTimeout(() => {
      messageElement.classList.remove("app-message--visible");
    }, 5000);
  };

  window.addEventListener("storageError", (event) => {
    const operation = event.detail?.operation;
    const messageKey =
      operation === "read"
        ? "storage.error.read"
        : operation === "remove"
          ? "storage.error.remove"
          : "storage.error.save";

    showAppMessage(I18n.get(messageKey), "error");
  });

  window.addEventListener("appMessage", (event) => {
    const detail = event.detail || {};
    const variant = detail.variant || "success";
    const message = detail.messageKey
      ? I18n.get(detail.messageKey)
      : detail.message || "";

    if (message) {
      showAppMessage(message, variant);
    }
  });

  const pendingMessageRaw = sessionStorage.getItem(PENDING_MESSAGE_KEY);
  if (pendingMessageRaw) {
    try {
      const pendingMessage = JSON.parse(pendingMessageRaw);
      if (pendingMessage?.messageKey || pendingMessage?.message) {
        showAppMessage(
          pendingMessage.messageKey
            ? I18n.get(pendingMessage.messageKey)
            : pendingMessage.message,
          pendingMessage.variant || "success",
        );
      }
    } catch (error) {
      console.error("Could not read pending app message", error);
    } finally {
      sessionStorage.removeItem(PENDING_MESSAGE_KEY);
    }
  }

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
    const setMenuState = (isOpen) => {
      hamburger.classList.toggle("active", isOpen);
      nav.classList.toggle("active", isOpen);
      hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    };

    hamburger.addEventListener("click", () => {
      const isOpen = !nav.classList.contains("active");
      setMenuState(isOpen);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("active")) {
        setMenuState(false);
        hamburger.focus();
      }
    });

    document.addEventListener("click", (event) => {
      const clickedInsideMenu = nav.contains(event.target);
      const clickedHamburger = hamburger.contains(event.target);
      if (
        !clickedInsideMenu &&
        !clickedHamburger &&
        nav.classList.contains("active")
      ) {
        setMenuState(false);
      }
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        setMenuState(false);
      });
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

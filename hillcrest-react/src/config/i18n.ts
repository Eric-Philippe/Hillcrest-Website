import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "../locales/en.json";
import frTranslation from "../locales/fr.json";

const storedLanguage = localStorage.getItem("language") || '"en"';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation }, // Set up translations for each language
    fr: { translation: frTranslation },
  },
  lng: storedLanguage.split('"')[1], // Set the active language
  fallbackLng: "en", // Fallback language if translation not found
  interpolation: {
    escapeValue: false, // React already escapes by default
  },
});

export default i18n;

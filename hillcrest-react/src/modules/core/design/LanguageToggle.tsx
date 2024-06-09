import React, { useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useTranslation } from "react-i18next";
import "./styles/LanguageToggle.css";

interface LanguageToggleProps {
  checked?: boolean;
}

const LanguageToggle: React.FC<LanguageToggleProps> = () => {
  const [language, setLanguage] = useLocalStorage<string>("language", "en");
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(language === "en");

  const [isChecked, setIsChecked] = useState(false);
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    if (i18n.language !== language) {
      setIsEnglish(language === "en");
    }
    if (isEnglish) {
      setIsChecked(true);
      setBgImage(
        "https://unpkg.com/i18n-switch@2.0.0/assets/united-states.png"
      );
    } else {
      setIsChecked(false);
      setBgImage("https://unpkg.com/i18n-switch@2.0.0/assets/france.png");
    }
  }, [language, i18n.language, isEnglish]);

  const handleToggle = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    if (isChecked) {
      setBgImage("https://unpkg.com/i18n-switch@2.0.0/assets/france.png");
    } else {
      setBgImage(
        "https://unpkg.com/i18n-switch@2.0.0/assets/united-states.png"
      );
    }

    const newLang = isEnglish ? "fr" : "en";
    i18n.changeLanguage(newLang);
    setLanguage(newLang);
    setIsEnglish(!isEnglish);
  };

  return (
    <div
      className={`toggle-switch ${isChecked ? "checked" : ""}`}
      onClick={handleToggle}
    >
      <div
        className="switch"
        style={{
          backgroundImage: `url(${bgImage})`,
          // Center the background image
          backgroundPosition: "center",
          // Make the background image cover the whole div
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

export default LanguageToggle;

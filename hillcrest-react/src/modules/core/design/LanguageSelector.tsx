import { useTranslation } from "react-i18next";
import { useLocalStorage } from "../hooks/useLocalStorage";

const LanguageSelector = () => {
  const [, setLanguage] = useLocalStorage<string>("language", "en");
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  const { t } = useTranslation();

  return (
    <div className="language-selector-container">
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        value={i18n.language}
        className="p-2 bg-white dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 rounded"
      >
        <option value="en">{t("menu.languages.en")}</option>
        <option value="fr">{t("menu.languages.fr")}</option>
      </select>
    </div>
  );
};

export default LanguageSelector;

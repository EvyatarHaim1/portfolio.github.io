import React from "react";
import { useTranslation } from "react-i18next";

const SwitchLang = ({ onChangeLang }) => {
  const { t, i18n } = useTranslation();

  const onToggleLang = (e) => {
    const lng = e.target.value.toLowerCase().slice(0, 2);
    onChangeLang(lng);
  };

  return (
    <select
      style={{
        width: "100px",
        height: "30px",
        borderRadius: "40px",
        textAlign: "center",
      }}
      onChange={onToggleLang}
      label="Age">
      <option>{t("en")}</option>
      <option>{t("es")}</option>
      <option>{t("he")}</option>
    </select>
  );
};
export default SwitchLang;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          en: "English",
          es: "Español",
          he: "Hebrew",
          header: {
            socialProfiles: "Social Profiles",
            cv: "CV",
            projects: "Projects",
            aboutMe: "About Me",
            contact: "Contact",
            profile: "profile",
          },
          companies: {
            title: "Companies That I worked with"
          },
          freelanceServices: {
            title: "My Freelance Services",
          },
          footer: "Copyright ©Evyatar Haim 2023",
        },
      },
      he: {
        translation: {
          en: "אנגלית",
          es: "ספרדית",
          he: "עברית",
          header: {
            socialProfiles: "רשתות חברתיות",
            cv: "ק.ח",
            projects: "פרויקטים",
            aboutMe: "אודות",
            contact: "יצירת קשר",
            profile: "פרופיל",
          },
          companies: {
            title: "חברות שאני עובד איתן"
          },
          freelanceServices: {
            title: "שירותי תוכנה פרילאנס",
          },
          footer: "@זכויות יוצרים אביתר חיים 2023",
        },
      },
      es: {
        translation: {
          en: "Inglés",
          es: "Español",
          he: "Hebreo",
          header: {
            socialProfiles: "perfiles sociales",
            cv: "Resume",
            projects: "Proyectos",
            aboutMe: "Sobre ti",
            contact: "Contacto",
            profile: "perfil",
          },
          companies: {
            title: "Empresas que trabajan conmigo"
          },
          freelanceServices: {
            title: "ervicios independientes",
          },
          footer: "derechos de autor ©Evyatar Haim 2023",
        },
      },
    },
  });

export default i18n;

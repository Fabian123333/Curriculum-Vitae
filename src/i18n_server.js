import fsBackend from 'i18next-fs-backend';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import path from 'path'

i18n
    .use(fsBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
    backend: {
        loadPath: path.join(__dirname, '../public/locales/{{lng}}/translation.json'),
    },
    cache: ["en"],
    fallbackLng: 'en',
    debug: false,
    detection: {
        order: ['queryString', 'navigator'],
        caches: ['cookie'],
    },
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;

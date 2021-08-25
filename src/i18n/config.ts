import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import translationEN from './en/translation.json';
import translationPL from './pl/translation.json';

const resources = {
    en: {
        translation: translationEN,
    },
    pl: {
        translation: translationPL,
    },
} as const;

i18n.use(initReactI18next).init({
    lng: 'en',
    resources,
});

export default i18n;

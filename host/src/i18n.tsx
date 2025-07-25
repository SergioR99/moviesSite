import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
        title: 'Characters',
        rick: 'Rick and Morty',
        harry: 'Harry Potter',
        loading: 'Loading...',
        },
    },
    es: {
        translation: {
        title: 'Personajes',
        rick: 'Rick y Morty',
        harry: 'Harry Potter',
        loading: 'Cargando...',
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'es',
    fallbackLng: 'es',
    interpolation: { escapeValue: false },
});

export default i18n;
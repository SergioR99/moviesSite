import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            name: 'Name',
            gender: 'Gender',
            species: 'Species',
            loading: 'Loading characters...',
        },
    },
    es: {
        translation: {
            name: 'Nombre',
            gender: 'Genero',
            species: 'Especie',
            loading: 'Cargando personajes...',
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

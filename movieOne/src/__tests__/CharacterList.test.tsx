import { render, screen } from '@testing-library/react';
import CharacterList from '../CharacterList';

jest.mock('../Hooks/useCharacter', () => ({
    useCharacters: () => ({
        loading: false,
        characterList: [
        {
            id: '1',
            name: 'Rick Sanchez',
            gender: 'Male',
            species: 'Human',
            image: 'https://rick.png',
        },
        ],
    }),
}));

jest.mock('../i18n');
jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
        i18n: { changeLanguage: jest.fn() },
    }),
}));

describe('CharacterList', () => {
    it('debe renderizar los datos del personaje', () => {
        render(<CharacterList language="es"/>);
        expect(screen.getByText(/name/i)).toBeInTheDocument();
        expect(screen.getByText(/Rick Sanchez/i)).toBeInTheDocument();
        expect(screen.getByText(/Male/i)).toBeInTheDocument();
        expect(screen.getByText(/Human/i)).toBeInTheDocument();
    });
});

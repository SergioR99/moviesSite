// import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

// jest.mock('movieOne/peliculaUno', () => () => <div>Mocked Rick Component</div>);
// jest.mock('movieTwo/PeliculaDos', () => () => <div>Mocked Harry Component</div>);

describe('App (Host)', () => {
    test('debe mostrar los botones e idioma', () => {
        render(
            <I18nextProvider i18n={i18n}>
                <App />
            </I18nextProvider>
        );

        expect(screen.getByText(i18n.t('rick'))).toBeInTheDocument();
        expect(screen.getByText(i18n.t('harry'))).toBeInTheDocument();
        expect(screen.getByText('Español')).toBeInTheDocument();
        expect(screen.getByText('English')).toBeInTheDocument();
    });

    test('debe renderizar el componente de Rick al hacer clic', async () => {
        render(
            <I18nextProvider i18n={i18n}>
                <App />
            </I18nextProvider>
        );

        screen.getByText(i18n.t('rick')).click();
        // expect(screen.getByText('Mocked Rick Component')).toBeInTheDocument();
        expect(await screen.findByText('Mocked Rick Component')).toBeInTheDocument();
    });

    test('debe renderizar el componente de Harry al hacer clic', async () => {
        render(
            <I18nextProvider i18n={i18n}>
                <App />
            </I18nextProvider>
        );

        screen.getByText(i18n.t('harry')).click();
        // expect(screen.getByText('Mocked Harry Component')).toBeInTheDocument();
        expect(await screen.findByText('Mocked Harry Component')).toBeInTheDocument();
    });
});
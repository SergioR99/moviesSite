import React, { useState, Suspense } from 'react';
import { useTranslation } from 'react-i18next';

// @ts-ignore
const PeliUno = React.lazy(() => import('movieOne/peliculaUno'));
// @ts-ignore
const PeliDos = React.lazy(() => import('movieTwo/PeliculaDos'));

function App() {
  const [selected, setSelected] = useState<'movieOne' | 'movieTwo' | null>(null);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: 'es' | 'en') => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      

      <h1>{t('title')}</h1>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', margin: '0 auto', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button onClick={() => setSelected('movieOne')}>{t('rick')}</button>
          <button onClick={() => setSelected('movieTwo')}>{t('harry')}</button>
        </div>

        <div style={{ display: 'flex', gap: '1rem', }}>
          <button onClick={() => changeLanguage('es')}>Español</button>
          <button onClick={() => changeLanguage('en')}>English</button>
        </div>
      </div>

      <Suspense fallback={<div>{t('loading')}</div>}>
        {selected === 'movieOne' && <PeliUno language={i18n.language} />}
        {selected === 'movieTwo' && <PeliDos language={i18n.language} />}
      </Suspense>
    </div>
  );
}

export default App;
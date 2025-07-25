
import styled from "styled-components";
import { useCharacters, type Character } from "./Hooks/useCharacter";
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";
import i18n from "./i18n";

const Container = styled.div.attrs({ className: 'character-list' })`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  padding: 1rem;
`;

const Card = styled.div.attrs({ className: 'character-list__card' })`
  width: 220px;
  border: 1px solid #ccc;
  border-radius: 12px;
  background-color: #fefefe;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  padding: 1rem;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const Image = styled.img.attrs({ className: 'character-list__card-image' })`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const Name = styled.h4.attrs({ className: 'character-list__card-name' })`
  font-size: 1.1rem;
  margin: 0.5rem 0;
  color: #333;
`;

const Info = styled.p.attrs({ className: 'character-list__card-info' })`
  font-size: 0.9rem;
  margin: 0.25rem 0;
  color: #555;
`;

const CharacterList = ({ language }: { language: 'es' | 'en' }) => {
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);
  
  const { t } = useTranslation();
  
  const { characterList, loading } = useCharacters('https://rickandmortyapi.com/api/character');
  
  if (loading) return <p>{t('loading')}</p>;

  return (
    <>
      <Container>
        {characterList.map((e: Character) => (
          <Card key={e.id}>
            <Image src={e.image} alt={e.name}  />
            <Name>{t('name')}: {e.name}</Name>
            <Info>{t('gender')}: {e.gender}</Info>
            <Info>{t('species')}: {e.species}</Info>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default CharacterList;
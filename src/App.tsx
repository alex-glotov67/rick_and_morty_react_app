import React from 'react';
import './App.scss';
import { CharacterList } from './components/CharacterList';
import { ContextProvider } from './Context';

export const App: React.FC = () => {
  return (
    <ContextProvider>
      <CharacterList />
    </ContextProvider>
  );
};

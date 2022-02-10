import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import { CharacterInfo } from './components/CharacterInfo';
import { CharacterList } from './components/CharacterList';
import { EpisodesList } from './components/EpisodeList';
import { LocationsList } from './components/LocationsList';
import { Navbar } from './components/Navbar';

export const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Switch>

        <Route
          path="/characters"
          exact
        >
          <CharacterList />
        </Route>

        <Route
          path="/characters/:characterId?"
          component={CharacterInfo}
        />

        <Route path="/episodes">
          <EpisodesList />
        </Route>

        <Route path="/locations">
          <LocationsList />
        </Route>

        <Route path="/watch_list">
          <p>My watch list</p>
        </Route>

        <Route path="/" exact>
          <h1 className="title">Home page</h1>
        </Route>

        <Redirect path="/home" to="/" />
      </Switch>

    </>
  );
};

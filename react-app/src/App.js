import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import { HomePage, ProfilePage, RepoPage } from './pages';
import { Rendered } from './lib/shouldCancel';

const App = () => {
  return (
    <div className="App">
      <Menu />
      <div className="main">
        <Route exact path="/" component={HomePage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/repo" component={RepoPage} />
        <Rendered /> {/* render this below main routes */}
      </div>
    </div>
  );
};

export default App;

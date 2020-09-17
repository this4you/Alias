import React from 'react';
import '../styles/App.css';
import Home from './HomeComponent';
import GameConfig from './GameConfigComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/home' component={() => <Home/>} />
        <Route path='/gameconfig' component={() => <GameConfig/>} />
        <Redirect to='/home' />
      </Switch>
    </div>
  );
}

export default withRouter(App);

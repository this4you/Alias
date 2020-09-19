import React from 'react';
import '../styles/App.css';
import Home from './HomeComponent';
import GameConfig from './GameConfigComponent';
import GamePlatform from './GamePlatformComponent';
import Round from './RoundComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

function App(props) {
  return (
    <div className="App">
      <Switch>
        <Route path='/home' component={() => <Home />} />
        <Route path='/gameconfig' component={() => <GameConfig {...props} />} />
        <Route path='/gameround' component={() => <Round {...props} />} />
        <Route path='/gameplatform' component={() => <GamePlatform {...props} />} />
        <Redirect to='/home' />
      </Switch>
    </div>
  );
}

export default withRouter(App);

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import Detail from './screens/detailsScreen/detail';
import Home from './screens/homeScreen/home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/detail">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

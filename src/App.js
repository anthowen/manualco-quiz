import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Quiz from './pages/Quiz';
import './styles/global.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/quiz">
          <Quiz />
        </Route>
        <Route path="*">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

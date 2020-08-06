import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './containers/LandingPage';
import Quiz from './containers/Quiz';

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

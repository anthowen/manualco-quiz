import React from 'react';
import { withRouter } from 'react-router';

import './index.scss';

//import logo
import logo from '../../../assets/svg/logo.svg';

const LandingHeader = ({ history }) => {
  const handleTakeQuizClick = () => {
    history.push('/quiz');
  };

  return (
    <div className="header__wrapper">
      <div className="header__center">
        <img src={logo} alt="logo" />

        <div className="header__content">
          <h1>BE GOOD</h1>
          <h1>TO YOURSELF</h1>

          <p>
            We’re working around the clock to bring you a holistic approach to
            your wellness. From top to bottom, inside and out.
          </p>

          <button onClick={handleTakeQuizClick}>TAKE THE QUIZ</button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(LandingHeader);

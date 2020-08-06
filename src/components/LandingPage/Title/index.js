import React from 'react';

import './style.scss';

const Title = ({ children }) => {
  return (
    <div>
      <h2 className="title">{children}</h2>
    </div>
  );
};

export default Title;

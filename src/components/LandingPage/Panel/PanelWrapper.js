import React from 'react';

//import styleing
import './style.scss';

const PanelWrapper = ({ children }) => {
  return <div className="panel-wrapper">{children}</div>;
};

export default PanelWrapper;

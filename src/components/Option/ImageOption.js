import React from 'react';
import './style.scss';

function ImageOption({ title, selected }) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: title }}
      className={'choice-option option-img' + (selected ? ' selected' : '')}
      data-testid="image-choice-option"
    ></div>
  );
}

export default React.memo(ImageOption);

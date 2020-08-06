import React from 'react';
import './style.scss';

function TextOption({ title, selected }) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<span class='ml-10'>${title}</span>`,
      }}
      className={'choice-option option-text ' + (selected ? ' selected' : '')}
      data-testid="text-choice-option"
    ></div>
  );
}

export default React.memo(TextOption);

import React from 'react';
import './style.scss';

function TextOption({ title, selected }) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<span class='ml-10'>${title}</span>`,
      }}
      className={
        'choice-option option-text block text-4xl mx-auto text-center' +
        (selected ? ' selected' : '')
      }
    ></div>
  );
}

export default React.memo(TextOption);

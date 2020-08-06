import React from 'react';
import { selectChosenValue, useQuestionStore } from '../../store';

import TextOption from '../../components/Option/TextOption';
import ImageOption from '../../components/Option/ImageOption';

import './style.scss';

function ChoiceOption({ title, value, type }) {
  const chosenValue = useQuestionStore(selectChosenValue);
  const choose = useQuestionStore((state) => state.choose);
  const handleSelect = React.useCallback(() => {
    if (chosenValue !== value) {
      choose(value);
    }
  }, [choose, chosenValue, value]);

  return (
    <div
      className="choice-option__wrapper"
      onClick={handleSelect}
      data-testid="choice-option"
    >
      {type === 'img' ? (
        <ImageOption title={title} selected={chosenValue === value} />
      ) : (
        <TextOption title={title} selected={chosenValue === value} />
      )}
    </div>
  );
}

export default React.memo(ChoiceOption);

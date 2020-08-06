import React from 'react';
import { useStore } from '../../store';
import './style.scss';

export default function QuizResult() {
  const results = useStore((state) => state.results);

  const quizResult = React.useMemo(() => {
    let result = false;

    for (const questionIdx in results) {
      if (typeof results[questionIdx] === 'boolean') {
        result = result || results[questionIdx];
      }
    }

    return result;
  }, [results]);

  return (
    <h1 className="quiz__result-message">
      {quizResult ? (
        <span>
          Unfortunately, we are unable to prescribe this medication for you.
          This is because finasteride can alter the PSA levels, which maybe used
          to monitor for cancer. You should discuss this further with your GP or
          specialist if you would still like this medication
        </span>
      ) : (
        <span>
          Great news! We have the perfect treatment for your hair loss. Proceed
          to{' '}
          <a
            href="https://www.manual.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.manual.co
          </a>
          , and prepare to say hello to your new hair!
        </span>
      )}
    </h1>
  );
}

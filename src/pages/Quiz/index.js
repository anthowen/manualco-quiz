import React from 'react';
import shallow from 'zustand/shallow';
import { useStore, useQuestionStore, selectChosenValue } from '../../store';
import Question from '../../containers/Question';
import QuizResult from '../../containers/QuizResult';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './style.scss';

export default function Quiz() {
  const [quizFinished, setQuizFinished] = React.useState(false);

  const { moveToNext, questions, currentQuestionIdx } = useStore(
    (state) => ({
      moveToNext: state.next,
      currentQuestionIdx: state.currentIndex,
      questions: state.questions,
    }),
    shallow,
  );
  const chosenValue = useQuestionStore(selectChosenValue);

  const handleNextClick = React.useCallback(() => {
    if (chosenValue === null) return;

    if (currentQuestionIdx === questions.length - 1) {
      setQuizFinished(true);
    }

    moveToNext(chosenValue);
  }, [moveToNext, chosenValue, currentQuestionIdx, questions]);

  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [currentQuestionIdx]);

  return (
    <div data-aos="fade-right" className="quiz__container">
      {!quizFinished && currentQuestionIdx < questions.length ? (
        <Question {...questions[currentQuestionIdx]} />
      ) : (
        <QuizResult />
      )}

      {!quizFinished ? (
        <div className="quiz__action">
          <button className="quiz__action--next" onClick={handleNextClick}>
            Next
            {/* <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg> */}
          </button>
        </div>
      ) : null}
    </div>
  );
}

import create from 'zustand';
// import { devtools } from 'zustand/middleware';
import QuizJson from '../json/quiz.json';

const parseQuestions = (data) => {
  const parsedQuestions = [];
  for (const question of data) {
    try {
      const option = question.options[0];
      const optionTitle = Object.keys(option)[0];

      if (/^<img(.*)\/>$/i.test(optionTitle)) {
        question.optionType = 'img';
      } else {
        question.optionType = 'text';
      }

      parsedQuestions.push(question);
    } catch (ex) {
      throw new Error('Invalid questions');
    }
  }

  return parsedQuestions;
};

// Global store
const [useStore] = create((set) => ({
  questions: parseQuestions(QuizJson.questions),
  currentIndex: 0,
  results: [],

  next: (result) =>
    set((state) => ({
      ...state,
      currentIndex: (state.currentIndex + 1) % state.questions.length,
      results: {
        ...state.results,
        [state.currentIndex]: result,
      },
    })),

  init: () =>
    set((state) => ({
      ...state,
      currentIndex: 0,
    })),
}));

// Question store
const [useQuestionStore] = create((set) => ({
  chosenValue: null,
  choose: (value) =>
    set((state) => ({
      chosenValue: value,
    })),
}));

// Selector
const selectChosenValue = (state) => state.chosenValue;

export { useStore, useQuestionStore, selectChosenValue };

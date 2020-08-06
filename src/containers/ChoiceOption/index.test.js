import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import * as ZStore from '../../store';
import create from 'zustand';
import { act } from 'react-dom/test-utils';
import {
  cleanup,
  fireEvent,
  render,
  waitForElement,
  screen,
} from '@testing-library/react';
import ChoiceOption from './index';

const renderOption = ({ title, value, type }) => {
  render(
    <MemoryRouter initialEntries={['/quiz']} initialIndex={0}>
      <ChoiceOption title={title} value={value} type={type} />,
    </MemoryRouter>,
  );
};

test('should render img for image type', () => {
  renderOption({
    title: "<img src='abc.png' alt='abc' />",
    value: 'abc-picture',
    type: 'img',
  });
  expect(screen.getByRole('img', { name: /abc/i })).toBeInTheDocument();
});

test('should render text for option of text type', () => {
  renderOption({
    title: 'Yes',
    value: true,
    type: 'text',
  });

  expect(screen.getByText(/yes/i)).toBeInTheDocument();
});

test('should update chosenValue state when selected', () => {
  // Mock the store
  let defaultValue = null;
  const chooseFn = jest.fn((value) => (defaultValue = value));
  ZStore.useQuestionStore = jest.fn((callback) =>
    callback({
      chosenValue: defaultValue,
      choose: chooseFn,
    }),
  );

  renderOption({
    title: 'Yes',
    value: true,
    type: 'text',
  });

  act(() => {
    fireEvent.click(screen.getByTestId(/^choice-option$/i));
  });

  expect(chooseFn).toHaveBeenCalledTimes(1);
  expect(defaultValue).toEqual(true);
});

test('should select the text option when its value matched', () => {
  ZStore.useQuestionStore = jest.fn((callback) =>
    callback({ chosenValue: true }),
  );

  renderOption({
    title: 'Yes',
    value: true,
    type: 'text',
  });

  const textEl = screen.getByTestId(/text-choice-option/i);
  expect(textEl.classList.contains('selected')).toBe(true);
});

test('should select the image option when its value matched', () => {
  ZStore.useQuestionStore = jest.fn((callback) =>
    callback({ chosenValue: 'abc-picture' }),
  );

  renderOption({
    title: "<img src='abc.png' alt='abc' />",
    value: 'abc-picture',
    type: 'img',
  });

  const textEl = screen.getByTestId(/image-choice-option/i);
  expect(textEl.classList.contains('selected')).toBe(true);
});

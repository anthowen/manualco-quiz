import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import {
  cleanup,
  fireEvent,
  render,
  waitForElement,
  screen,
} from '@testing-library/react';
import ChoiceOption from './index';

test('should render img for image type', () => {
  render(
    <MemoryRouter initialEntries={['/quiz']} initialIndex={0}>
      <ChoiceOption
        title="<img src='abc.png' alt='abc' />"
        value={false}
        type=""
      />
      ,
    </MemoryRouter>,
  );

  expect(screen.getByRole('img', { name: /abc/i })).toBeInTheDocument();
});

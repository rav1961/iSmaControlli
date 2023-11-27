import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonMobile from './ButtonMobile';

test('ButtonMobile toggles menu state when clicked', () => {
  const mockClickHandler = jest.fn();

  render(<ButtonMobile clickHandler={mockClickHandler} />);

  // is render component
  const button = screen.getByRole('button', { name: 'Toggle menu' });
  expect(button).toBeInTheDocument();

  // click button and check status changed
  fireEvent.click(button);
  expect(mockClickHandler).toHaveBeenCalledWith(true);

  // click again and check status changed to
  fireEvent.click(button);
  expect(mockClickHandler).toHaveBeenCalledWith(false);
});

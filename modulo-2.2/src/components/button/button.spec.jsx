import { render, screen } from '@testing-library/react';
import { Button } from '.';
import userEvent from '@testing-library/user-event';

describe('<Button />', () => {
  it('should render the button with the text "Load more"', () => {
    const fn = jest.fn();
    render(<Button text="Load more" onClick={fn} />);
    expect.assertions(1);

    const button = screen.getByRole('button', { name: /load more/i });
    // expect(button).toHaveAttribute('class', 'button')
    expect(button).toBeInTheDocument();
  });

  it('Should call function on button click', () => {
    const fn = jest.fn();
    render(<Button text="Load more" onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });
    userEvent.click(button);
    // fireEvent.click(button)
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('Should be disabled when disabled is true', () => {
    const fn = jest.fn();
    render(<Button text="Load more" disabled={true} onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeDisabled();
  });

  it('Should be enabled when disabled is false', () => {
    const fn = jest.fn();
    render(<Button text="Load more" disabled={false} onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeEnabled();
  });

  it('Should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<Button text="Load more" onClick={fn} disabled={false} />);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeEnabled();

    expect(container.firstChild).toMatchSnapshot();
  });
});

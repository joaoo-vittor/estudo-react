import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { Sectionbackground } from '.';

describe('<Sectionbackground />', () => {
  it('should render with backgroud dark', () => {
    const { container } = renderTheme(
      <Sectionbackground background={true}>
        <h1>Children</h1>
      </Sectionbackground>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render with backgroud light', () => {
    const { container } = renderTheme(
      <Sectionbackground>
        <h1>Children</h1>
      </Sectionbackground>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render with backgroud dark', () => {
    renderTheme(
      <Sectionbackground background={true}>
        <h1>Children</h1>
      </Sectionbackground>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});

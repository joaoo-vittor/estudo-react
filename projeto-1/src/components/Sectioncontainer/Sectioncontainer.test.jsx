import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { Sectioncontainer } from '.';

describe('<Sectioncontainer />', () => {
  it('should render content', () => {
    const { container } = renderTheme(
      <Sectioncontainer>
        <h1>Children</h1>
      </Sectioncontainer>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});

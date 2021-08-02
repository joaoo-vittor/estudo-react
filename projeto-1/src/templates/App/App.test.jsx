import { screen } from '@testing-library/dom';

import { renderTheme } from '../../styles/renderTheme';
import { theme } from '../../styles/theme';
import { Home } from '.';

test('renders learn react link', () => {
  renderTheme(<Home />);

  const headingContainer = screen.getByRole('heading', { name: 'Hello' }).parentElement;

  expect(headingContainer).toHaveStyle({
    background: theme.colors.secondaryBg,
  });

  expect(headingContainer).toHaveStyleRule('background', 'blue');

  expect(headingContainer).toMatchSnapshot();
});

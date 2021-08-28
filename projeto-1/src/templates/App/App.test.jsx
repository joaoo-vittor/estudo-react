import { screen } from '@testing-library/dom';

import { renderTheme } from '../../styles/renderTheme';
import { theme } from '../../styles/theme';
import { Home } from '.';

describe('<Home />', () => {
  it('should render home', () => {
    renderTheme(<Home />);
  });
});

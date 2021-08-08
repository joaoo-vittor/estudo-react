import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme'
import { GlobalStyle } from '../src/styles/global_styles'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: theme.colors.white,
      },
      {
        name: 'dark',
        value: theme.colors.primaryColor,
      },
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyle />
    </ThemeProvider>
  )
];

import type { Preview } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles } from '../src/styles'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: { disable: true },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme === 'dark' ? darkTheme : lightTheme
      return (
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <div style={{ backgroundColor: theme.colors.background, color: theme.colors.foreground, minHeight: '100vh', padding: '1rem' }}>
            <Story />
          </div>
        </ThemeProvider>
      )
    },
  ],
}

export default preview
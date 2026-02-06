import { ThemeProvider } from 'styled-components'
import { ThemeModeProvider, useThemeMode } from './context'
import { GlobalStyles, lightTheme, darkTheme } from './styles'

const ThemedApp = () => {
  const { mode, toggleTheme } = useThemeMode()
  const theme = mode === 'light' ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>
        <h1>Genetec Tech Task</h1>
        <button onClick={toggleTheme}>
          Toggle {mode === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    </ThemeProvider>
  )
}

const App = () => {
  return (
    <ThemeModeProvider>
      <ThemedApp />
    </ThemeModeProvider>
  )
}

export default App

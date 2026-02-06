import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import type { ThemeContextValue } from './ThemeContext'

export const useThemeMode = (): ThemeContextValue => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useThemeMode must be used within ThemeModeProvider')
    }
    return context
}

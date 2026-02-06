import { createContext } from 'react'

type ThemeMode = 'light' | 'dark'

export interface ThemeContextValue {
    mode: ThemeMode
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

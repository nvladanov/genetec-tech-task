import { useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { ThemeContext } from './ThemeContext'

type ThemeMode = 'light' | 'dark'

const getInitialMode = (): ThemeMode => {
    if (typeof window === 'undefined') return 'light'
    const stored = localStorage.getItem('theme-mode')
    if (stored === 'light' || stored === 'dark') return stored
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

interface ThemeProviderProps {
    children: ReactNode
}

export const ThemeModeProvider = ({ children }: ThemeProviderProps) => {
    const [mode, setMode] = useState<ThemeMode>(getInitialMode)

    useEffect(() => {
        localStorage.setItem('theme-mode', mode)
    }, [mode])

    const toggleTheme = () => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
    }

    return (
        <ThemeContext.Provider value={{ mode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

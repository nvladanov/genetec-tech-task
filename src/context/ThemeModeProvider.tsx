import { useState, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';
import { ThemeContext, THEME_STORAGE_KEY, type ThemeMode } from './ThemeContext';

const getInitialMode = (): ThemeMode => {
    if (typeof window === 'undefined') return 'light';

    const stored = localStorage.getItem(THEME_STORAGE_KEY);

    if (stored === 'light' || stored === 'dark') return stored;

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeModeProvider = ({ children }: ThemeProviderProps) => {
    const [mode, setMode] = useState<ThemeMode>(getInitialMode);

    useEffect(() => {
        localStorage.setItem(THEME_STORAGE_KEY, mode);
    }, [mode]);

    const toggleTheme = useCallback(() => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
    }, []);

    return <ThemeContext.Provider value={{ mode, toggleTheme }}>{children}</ThemeContext.Provider>;
};


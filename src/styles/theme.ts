export const lightTheme = {
    colors: {
        background: '#ffffff',
        foreground: '#111827',
        border: '#e5e7eb',
        primary: '#3b82f6',
    },
    typography: {
        fontFamily: 'Inter',
        fontWeight: {
            medium: 500,
        },
    },
    spacing: {
        sm: '8px',
        md: '16px',
    },
    radii: {
        md: '8px',
    },
    transitions: {
        fast: '150ms ease',
        normal: '200ms ease',
    },
}

export const darkTheme: typeof lightTheme = {
    colors: {
        background: '#0f0f0f',
        foreground: '#fafafa',
        border: '#27272a',
        primary: '#3b82f6',
    },
    typography: lightTheme.typography,
    spacing: lightTheme.spacing,
    radii: lightTheme.radii,
    transitions: lightTheme.transitions,
}

export type Theme = typeof lightTheme

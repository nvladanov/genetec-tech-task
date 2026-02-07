export const lightTheme = {
    colors: {
        background: '#ffffff',
        foreground: '#111827',
        border: '#e5e7eb',
        muted: '#6b7280',
        primary: '#2563eb',
        white: '#ffffff',
        error: '#ef4444',
        success: '#22c55e',
    },
    typography: {
        fontFamily: 'Inter, system-ui, sans-serif',
        fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            md: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
        },
        fontWeight: {
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
        },
    },
    spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
    },
    radii: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        full: '9999px',
    },
    shadows: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    },
    transitions: {
        fast: '150ms ease',
        normal: '200ms ease',
    },
};

export const darkTheme: typeof lightTheme = {
    colors: {
        background: '#0f0f0f',
        foreground: '#fafafa',
        border: '#27272a',
        muted: '#a1a1aa',
        primary: '#3b82f6',
        white: '#ffffff',
        error: '#ef4444',
        success: '#22c55e',
    },
    typography: lightTheme.typography,
    spacing: lightTheme.spacing,
    radii: lightTheme.radii,
    shadows: lightTheme.shadows,
    transitions: lightTheme.transitions,
};

export type Theme = typeof lightTheme;

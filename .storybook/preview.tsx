import type { Preview } from '@storybook/react-vite';
import { ThemeProvider } from 'styled-components';
import { I18nextProvider } from 'react-i18next';
import { useEffect } from 'react';
import { lightTheme, darkTheme, GlobalStyles } from '../src/styles';
import i18n from '../src/i18n/config';

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
                items: [{ value: 'light', title: 'Light' }, { value: 'dark', title: 'Dark' }],
                dynamicTitle: true,
            },
        },
        locale: {
            description: 'Internationalization locale',
            defaultValue: 'en',
            toolbar: {
                icon: 'globe',
                items: [
                    { value: 'en', title: 'English' },
                    { value: 'fr', title: 'Français' },
                    { value: 'de', title: 'Deutsch' },
                ],
                dynamicTitle: true,
            },
        },
    },
    decorators: [
        (Story, context) => {
            const theme = context.globals.theme === 'dark' ? darkTheme : lightTheme;
            const contextLocale = context.globals.locale;

            useEffect(() => {
                i18n.changeLanguage(contextLocale);
            }, [contextLocale]);

            return (
                <I18nextProvider i18n={i18n}>
                    <ThemeProvider theme={theme}>
                        <GlobalStyles />
                        <div
                            style={{
                                backgroundColor: theme.colors.background,
                                color: theme.colors.foreground,
                                minHeight: '100vh',
                                padding: '1rem',
                            }}
                        >
                            <Story />
                        </div>
                    </ThemeProvider>
                </I18nextProvider>
            );
        },
    ],
};

export default preview;

import { AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';
import { ErrorContainer, ErrorMessage, ErrorTitle } from './styles';

interface ErrorStateProps {
    message?: string;
}

export const ErrorState = ({ message }: ErrorStateProps) => {
    const { t } = useTranslation();
    const theme = useTheme();

    return (
        <ErrorContainer role="alert" aria-live="polite">
            <AlertCircle
                size={48}
                strokeWidth={1}
                color={theme?.colors?.error}
                style={{ marginBottom: '1rem', opacity: 0.8 }}
            />
            <ErrorTitle>{t('datagrid.error.title')}</ErrorTitle>
            <ErrorMessage>{message || t('datagrid.error.defaultMessage')}</ErrorMessage>
        </ErrorContainer>
    );
};

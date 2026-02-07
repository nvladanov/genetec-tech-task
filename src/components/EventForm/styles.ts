import styled from 'styled-components';

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.lg};
    max-width: 600px;
    margin: 0 auto;
    width: 100%;
    padding: ${({ theme }) => theme.spacing.xl};
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: ${({ theme }) => theme.radii.lg};
    border: 1px solid ${({ theme }) => theme.colors.border};
    box-shadow: ${({ theme }) => theme.shadows.sm};
`;

export const FormHeader = styled.div`
    margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const FormTitle = styled.h2`
    margin: 0;
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.foreground};
`;

export const FormDescription = styled.p`
    margin: ${({ theme }) => theme.spacing.sm} 0 0;
    color: ${({ theme }) => theme.colors.muted};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xs};
`;

export const Label = styled.label`
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    color: ${({ theme }) => theme.colors.foreground};
`;

export const Input = styled.input<{ $hasError?: boolean }>`
    padding: ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.radii.md};
    border: 1px solid ${({ theme, $hasError }) => ($hasError ? theme.colors.error : theme.colors.border)};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.foreground};
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    transition: all ${({ theme }) => theme.transitions.fast};

    &:focus {
        outline: none;
        border-color: ${({ theme, $hasError }) => ($hasError ? theme.colors.error : theme.colors.primary)};
        box-shadow: 0 0 0 2px ${({ theme, $hasError }) => ($hasError ? theme.colors.error : theme.colors.primary)}20;
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors.muted};
    }
`;

export const TextArea = styled.textarea<{ $hasError?: boolean }>`
    padding: ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.radii.md};
    border: 1px solid ${({ theme, $hasError }) => ($hasError ? theme.colors.error : theme.colors.border)};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.foreground};
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    transition: all ${({ theme }) => theme.transitions.fast};
    min-height: 100px;
    resize: vertical;

    &:focus {
        outline: none;
        border-color: ${({ theme, $hasError }) => ($hasError ? theme.colors.error : theme.colors.primary)};
        box-shadow: 0 0 0 2px ${({ theme, $hasError }) => ($hasError ? theme.colors.error : theme.colors.primary)}20;
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors.muted};
    }
`;

export const ErrorMessage = styled.span`
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
    color: ${({ theme }) => theme.colors.error};
    margin-top: 4px;
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: ${({ theme }) => theme.spacing.md};
    margin-top: ${({ theme }) => theme.spacing.md};
`;

export const Button = styled.button<{ $variant?: 'primary' | 'secondary'; disabled?: boolean }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
    border-radius: ${({ theme }) => theme.radii.md};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
    transition: all ${({ theme }) => theme.transitions.fast};

    ${({ theme, $variant = 'primary' }) =>
        $variant === 'primary'
            ? `
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
        border: 1px solid ${theme.colors.primary};
        
        &:hover:not(:disabled) {
            opacity: 0.9;
        }
    `
            : `
        background-color: transparent;
        color: ${theme.colors.foreground};
        border: 1px solid ${theme.colors.border};
        
        &:hover:not(:disabled) {
            background-color: ${theme.colors.border}33;
        }
    `}
`;

export const SuccessMessage = styled.div`
    padding: ${({ theme }) => theme.spacing.md};
    background-color: ${({ theme }) => theme.colors.success}20;
    color: ${({ theme }) => theme.colors.success};
    border-radius: ${({ theme }) => theme.radii.md};
    border: 1px solid ${({ theme }) => theme.colors.success};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
`;

export const FormErrorSummary = styled.div`
    padding: ${({ theme }) => theme.spacing.md};
    background-color: ${({ theme }) => theme.colors.error}20;
    color: ${({ theme }) => theme.colors.error};
    border-radius: ${({ theme }) => theme.radii.md};
    border: 1px solid ${({ theme }) => theme.colors.error};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
`;

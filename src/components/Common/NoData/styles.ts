import styled from 'styled-components';

export const NoDataContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${({ theme }) => theme.spacing.md} 0;
    min-height: 200px;
    text-align: center;
`;

export const NoDataTitle = styled.h3`
    margin: 0 0 ${({ theme }) => theme.spacing.sm};
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.foreground};
`;

export const NoDataMessage = styled.p`
    margin: 0 0 ${({ theme }) => theme.spacing.md};
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.muted};
    max-width: 300px;
`;

export const PrimaryButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    border: none;
    border-radius: ${({ theme }) => theme.radii.md};
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: opacity ${({ theme }) => theme.transitions.fast};

    &:hover {
        opacity: 0.9;
    }
`;

import styled from 'styled-components';

export const DemoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.lg};
    height: 90vh;
    padding: ${({ theme }) => theme.spacing.md};
`;

export const DemoHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const DemoContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 450px;
    gap: ${({ theme }) => theme.spacing.xl};
    flex: 1;
    overflow: hidden;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }
`;

export const Panel = styled.div<{ $noBorder?: boolean; $padding?: string }>`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
    overflow: hidden;
    height: 100%;
    background: ${({ theme }) => theme.colors.background};
    border-radius: ${({ theme }) => theme.radii.md};
    border: ${({ $noBorder, theme }) => ($noBorder ? 'none' : `1px solid ${theme.colors.border}`)};
    padding: ${({ $padding, theme }) => $padding || theme.spacing.md};
`;

export const PanelTitle = styled.h2`
    margin: 0;
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    color: ${({ theme }) => theme.colors.foreground};
`;

export const TimelineWrapper = styled.div`
    flex: 1;
    overflow-y: auto;
    min-height: 0;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.border};
        border-radius: 4px;

        &:hover {
            background-color: ${({ theme }) => theme.colors.muted};
        }
    }
`;

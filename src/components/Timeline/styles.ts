import styled from 'styled-components';

export const TimelineContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
    padding: ${({ theme }) => theme.spacing.md};
    max-width: 800px;
    margin: 0 auto;
`;

export const TimelineGroup = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const TimelineHeader = styled.h3`
    font-size: 0.875rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.muted};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    padding-left: 24px;
    position: sticky;
    top: 0;
    background: ${({ theme }) => theme.colors.background};
    z-index: 1;
    padding-top: 8px;
    padding-bottom: 8px;
`;

export const TimelineList = styled.ol`
    list-style: none;
    padding: 0;
    margin: 0;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 7px;
        width: 2px;
        background-color: ${({ theme }) => theme.colors.border};
    }
`;

export const TimelineItemContainer = styled.li`
    position: relative;
    padding-left: 32px;
    margin-bottom: ${({ theme }) => theme.spacing.md};

    &:last-child {
        margin-bottom: 0;
    }
`;

export const TimelineDot = styled.div`
    position: absolute;
    left: 0;
    top: 6px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.background};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    z-index: 2;
    transition: all ${({ theme }) => theme.transitions.fast};

    ${TimelineItemContainer}:hover & {
        background-color: ${({ theme }) => theme.colors.primary};
        transform: scale(1.1);
    }
`;

export const TimelineContent = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.md};
    padding: ${({ theme }) => theme.spacing.md};
    transition: all ${({ theme }) => theme.transitions.fast};
    cursor: pointer;

    &:hover {
        border-color: ${({ theme }) => theme.colors.primary};
        box-shadow:
            0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
        transform: translateY(-1px);
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.primary};
        outline-offset: 2px;
    }
`;

export const TimelineTime = styled.time`
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.muted};
    display: block;
    margin-bottom: 4px;
`;

export const TimelineTitle = styled.h4`
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.foreground};
    margin: 0 0 4px;
`;

export const TimelineDescription = styled.p`
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.foreground};
    opacity: 0.8;
    margin: 0;
    line-height: 1.5;
`;

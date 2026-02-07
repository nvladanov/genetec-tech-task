import styled from 'styled-components';

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    padding: ${({ theme }) => theme.spacing.md};
`;

export const ModalContent = styled.div`
    background-color: transparent;
    padding: 0;
    border-radius: ${({ theme }) => theme.radii.lg};
    box-shadow: none;
    max-width: 600px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    border: none;
`;

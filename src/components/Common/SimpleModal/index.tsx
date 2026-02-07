import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ModalContent, ModalOverlay } from './styles';

interface SimpleModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const SimpleModal = ({ isOpen, onClose, children }: SimpleModalProps) => {
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return createPortal(
        <ModalOverlay
            ref={overlayRef}
            onClick={(e) => {
                if (e.target === overlayRef.current) onClose();
            }}
            role="dialog"
            aria-modal="true"
        >
            <ModalContent>{children}</ModalContent>
        </ModalOverlay>,
        document.body
    );
};

import { useState, useCallback, useEffect, useRef, type KeyboardEvent } from 'react';
import type { Event } from '../../types';

interface UseTimelineNavigationProps {
    groupedEvents: Array<{
        date: string;
        events: Event[];
    }>;
    autoFocus?: boolean;
}

export const useTimelineNavigation = ({
    groupedEvents,
    autoFocus = false,
}: UseTimelineNavigationProps) => {
    const [focusedPosition, setFocusedPosition] = useState<[number, number]>([0, 0]);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            const [currentGroupIndex, currentItemIndex] = focusedPosition;

            let nextGroupIndex = currentGroupIndex;
            let nextItemIndex = currentItemIndex;

            switch (e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    if (currentItemIndex < groupedEvents[currentGroupIndex].events.length - 1) {
                        nextItemIndex++;
                    } else if (currentGroupIndex < groupedEvents.length - 1) {
                        nextGroupIndex++;
                        nextItemIndex = 0;
                    }
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    if (currentItemIndex > 0) {
                        nextItemIndex--;
                    } else if (currentGroupIndex > 0) {
                        nextGroupIndex--;
                        nextItemIndex = groupedEvents[nextGroupIndex].events.length - 1;
                    }
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    if (currentGroupIndex < groupedEvents.length - 1) {
                        nextGroupIndex++;
                        nextItemIndex = 0;
                    }
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    if (currentGroupIndex > 0) {
                        nextGroupIndex--;
                        nextItemIndex = 0;
                    }
                    break;
                case 'Home':
                    e.preventDefault();
                    nextGroupIndex = 0;
                    nextItemIndex = 0;
                    break;
                case 'End':
                    e.preventDefault();
                    nextGroupIndex = groupedEvents.length - 1;
                    nextItemIndex = groupedEvents[groupedEvents.length - 1].events.length - 1;
                    break;
                default:
                    return;
            }

            setFocusedPosition([nextGroupIndex, nextItemIndex]);
        },
        [focusedPosition, groupedEvents]
    );

    const hasFocusedOnce = useRef(false);

    useEffect(() => {
        if (!containerRef.current) return;

        const [groupIndex, itemIndex] = focusedPosition;
        const selector = `[data-group-index="${groupIndex}"][data-item-index="${itemIndex}"]`;
        const element = containerRef.current.querySelector(selector) as HTMLElement;

        if (element) {
            if (!hasFocusedOnce.current) {
                if (autoFocus) {
                    element.focus();
                }
                hasFocusedOnce.current = true;
            } else {
                element.focus();
            }
        }
    }, [focusedPosition, autoFocus]);

    return {
        containerRef,
        focusedPosition,
        handleKeyDown,
    };
};

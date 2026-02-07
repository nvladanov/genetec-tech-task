import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import type { Event } from '../../types';

interface UseTimelineProps {
    events: Event[];
}

interface UseTimelineReturn {
    groupedEvents: Array<{
        date: string;
        events: Event[];
    }>;
}

export const useTimeline = ({ events }: UseTimelineProps): UseTimelineReturn => {
    const { i18n } = useTranslation();

    const groupedEvents = useMemo(() => {
        const sortedEvents = [...events].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        const groups: Record<string, Event[]> = {};

        sortedEvents.forEach((event) => {
            const dateObj = new Date(event.date);
            const dateKey = dateObj.toLocaleDateString(i18n.language, {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            });

            if (!groups[dateKey]) {
                groups[dateKey] = [];
            }
            groups[dateKey].push(event);
        });

        return Object.entries(groups).map(([date, groupEvents]) => ({
            date,
            events: groupEvents,
        }));
    }, [events, i18n.language]);

    return {
        groupedEvents,
    };
};

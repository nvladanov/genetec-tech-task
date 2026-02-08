import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import type { Event } from '../../types';
import { DATE_FORMAT_OPTIONS, type EventGroup } from './utils';

interface UseTimelineProps {
    events: Event[];
}

interface UseTimelineReturn {
    groupedEvents: EventGroup[];
}

export const useTimeline = ({ events }: UseTimelineProps): UseTimelineReturn => {
    const { i18n } = useTranslation();

    const groupedEvents = useMemo(() => {
        const sortedEvents = [...events].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        const groups: Record<string, Event[]> = {};

        sortedEvents.forEach((event) => {
            const dateKey = new Date(event.date).toLocaleDateString(i18n.language, DATE_FORMAT_OPTIONS);

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


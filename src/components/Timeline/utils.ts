import type { Event } from '../../types';

export const DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};

export const TIME_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
};

export const formatEventDate = (date: string | Date, locale: string): string => {
    return new Date(date).toLocaleDateString(locale, DATE_FORMAT_OPTIONS);
};

export const formatEventTime = (date: string | Date, locale: string): string => {
    return new Date(date).toLocaleTimeString(locale, TIME_FORMAT_OPTIONS);
};

export interface EventGroup {
    date: string;
    events: Event[];
}

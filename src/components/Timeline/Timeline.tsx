import { useTranslation } from 'react-i18next';
import { useTimeline } from './useTimeline';
import { useTimelineNavigation } from './useTimelineNavigation';
import {
    TimelineContainer,
    TimelineContent,
    TimelineDescription,
    TimelineDot,
    TimelineGroup,
    TimelineHeader,
    TimelineItemContainer,
    TimelineList,
    TimelineTime,
    TimelineTitle,
} from './styles';
import { NoDataType, type Event } from '../../types';
import { NoData } from '../Common/NoData';

interface TimelineProps {
    events: Event[];
    autoFocus?: boolean;
}

export const Timeline = ({ events, autoFocus }: TimelineProps) => {
    const { t, i18n } = useTranslation();
    const { groupedEvents } = useTimeline({ events });
    const { containerRef, handleKeyDown, focusedPosition } = useTimelineNavigation({
        groupedEvents,
        autoFocus,
    });

    return (
        <TimelineContainer ref={containerRef} onKeyDown={handleKeyDown} role="region" aria-label={t('timeline.ariaLabel')}>
            {groupedEvents.length === 0 ? (
                <NoData type={NoDataType.EMPTY} />
            ) : (
                groupedEvents.map((group, groupIndex) => (
                    <TimelineGroup key={group.date}>
                        <TimelineHeader>{group.date}</TimelineHeader>
                        <TimelineList>
                            {group.events.map((event, itemIndex) => {
                                const isFocused = focusedPosition[0] === groupIndex && focusedPosition[1] === itemIndex;

                                return (
                                    <TimelineItemContainer key={event.id}>
                                        <TimelineDot />
                                        <TimelineContent
                                            tabIndex={isFocused ? 0 : -1}
                                            data-group-index={groupIndex}
                                            data-item-index={itemIndex}
                                            role="article"
                                            aria-label={`${event.title} on ${new Date(event.date).toLocaleDateString(i18n.language, {
                                                weekday: 'long',
                                                month: 'long',
                                                day: 'numeric',
                                            })} at ${new Date(event.date).toLocaleTimeString(i18n.language, { hour: '2-digit', minute: '2-digit' })}`}
                                        >
                                            <TimelineTime>
                                                {new Date(event.date).toLocaleTimeString(i18n.language, {
                                                    hour: '2-digit',
                                                    minute: '2-digit',
                                                })}
                                            </TimelineTime>
                                            <TimelineTitle>{event.title}</TimelineTitle>
                                            {event.description && (
                                                <TimelineDescription>{event.description}</TimelineDescription>
                                            )}
                                        </TimelineContent>
                                    </TimelineItemContainer>
                                );
                            })}
                        </TimelineList>
                    </TimelineGroup>
                ))
            )}
        </TimelineContainer>
    );
};

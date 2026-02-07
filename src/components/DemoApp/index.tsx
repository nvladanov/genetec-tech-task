import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Plus } from 'lucide-react';
import { DataGrid } from '../DataGrid';
import { Timeline } from '../Timeline';
import { EventForm } from '../EventForm';
import { SimpleModal } from '../Common/SimpleModal';
import { Button } from '../EventForm/styles';
import { generateMockEvents } from '../../utils/mockData';
import type { Event, Column } from '../../types';
import { DemoContainer, DemoContent, DemoHeader, Panel, PanelTitle, TimelineWrapper } from './styles';
import { type EventFormValues } from '../EventForm/useEventForm';

export const DemoApp = () => {
    const [events, setEvents] = useState<Event[]>(() => generateMockEvents(100));
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { t } = useTranslation();

    const columns: Column<Event>[] = useMemo(
        () => [
            { key: 'title', label: t('eventForm.labels.title'), sortable: true, filterable: true, width: '30%' },
            {
                key: 'date',
                label: t('eventForm.labels.date'),
                sortable: true,
                accessor: (row: Event) => new Date(row.date).toLocaleString(),
                width: '20%',
            },
            { key: 'description' as const, label: t('eventForm.labels.description'), width: '50%' },
        ],
        [t]
    );

    const handleAddEvent = async (values: EventFormValues) => {
        const newEvent: Event = {
            id: crypto.randomUUID(),
            title: values.title,
            date: values.date,
            description: values.description,
        };

        setEvents((prev) => [newEvent, ...prev]);
        setIsModalOpen(false);
    };

    return (
        <DemoContainer>
            <DemoHeader>
                <h1>{t('demo.title')}</h1>
                <Button $variant="primary" onClick={() => setIsModalOpen(true)}>
                    <Plus size={16} />
                    {t('demo.newEvent')}
                </Button>
            </DemoHeader>

            <DemoContent>
                <Panel $noBorder>
                    <PanelTitle>{t('demo.allEvents', { count: events.length })}</PanelTitle>
                    <DataGrid<Event>
                        data={events}
                        columns={columns}
                        rowKey="id"
                        initialPageSize={10}
                    />
                </Panel>

                <Panel>
                    <PanelTitle>{t('demo.timeline')}</PanelTitle>
                    <TimelineWrapper>
                        <Timeline events={events} autoFocus />
                    </TimelineWrapper>
                </Panel>
            </DemoContent>

            <SimpleModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <EventForm
                    onSubmit={handleAddEvent}
                    onCancel={() => setIsModalOpen(false)}
                />
            </SimpleModal>
        </DemoContainer>
    );
};

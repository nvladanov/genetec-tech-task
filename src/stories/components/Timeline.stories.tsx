import type { Meta, StoryObj } from '@storybook/react-vite';
import { Timeline } from '../../components/Timeline';
import { generateMockEvents } from '../../utils';

const meta: Meta<typeof Timeline> = {
    title: 'Components/Timeline',
    component: Timeline,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
    args: {
        events: generateMockEvents(10),
        autoFocus: true,
    },
};

export const ManyEvents: Story = {
    args: {
        events: generateMockEvents(50),
    },
};

export const Grouped: Story = {
    args: {
        events: [
            ...Array.from({ length: 5 }).map((_, i) => ({
                id: `group1-${i}`,
                title: `Event ${i + 1} - Day 1`,
                date: new Date('2023-10-01T10:00:00').toISOString(),
                description: 'Description for event 1',
            })),
            ...Array.from({ length: 5 }).map((_, i) => ({
                id: `group2-${i}`,
                title: `Event ${i + 1} - Day 2`,
                date: new Date('2023-10-02T14:30:00').toISOString(),
                description: 'Description for event 2',
            })),
            ...Array.from({ length: 5 }).map((_, i) => ({
                id: `group3-${i}`,
                title: `Event ${i + 1} - Day 3`,
                date: new Date('2023-10-03T09:15:00').toISOString(),
                description: 'Description for event 3',
            })),
        ],
    },
};

export const Empty: Story = {
    args: {
        events: [],
    },
};

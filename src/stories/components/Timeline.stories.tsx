import type { Meta, StoryObj } from '@storybook/react-vite';
import { Timeline } from '../../components/Timeline';


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
        events: [
            ...Array.from({ length: 5 }).map((_, i) => ({
                id: `group1-${i}`,
                title: `Client Meeting - Project Alpha`,
                date: new Date('2023-10-01T10:00:00').toISOString(),
                description: 'Discussing Q4 roadmap and deliverables with the client stakeholders.',
            })),
            ...Array.from({ length: 3 }).map((_, i) => ({
                id: `group2-${i}`,
                title: `Team Sync - Design Review`,
                date: new Date('2023-10-02T14:30:00').toISOString(),
                description: 'Reviewing the new dashboard mockups.',
            })),
            ...Array.from({ length: 4 }).map((_, i) => ({
                id: `group3-${i}`,
                title: `Code Deployment`,
                date: new Date('2023-10-03T09:15:00').toISOString(),
                description: ' deploying version 2.4.0 to production environment.',
            })),
        ],
        autoFocus: true,
    },
};

export const Empty: Story = {
    args: {
        events: [],
    },
};


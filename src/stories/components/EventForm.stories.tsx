import type { Meta, StoryObj } from '@storybook/react-vite';
import { EventForm } from '../../components/EventForm';

const meta: Meta<typeof EventForm> = {
    title: 'Components/EventForm',
    component: EventForm,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        onSubmit: { action: 'submitted' },
        onCancel: { action: 'cancelled' },
    },
};

export default meta;
type Story = StoryObj<typeof EventForm>;

export const Default: Story = {
    args: {},
};

export const Edit: Story = {
    args: {
        initialValues: {
            title: 'Weekly Standup',
            date: '2023-10-24T10:00',
            description: 'Team updates and blockers.',
        },
    },
};

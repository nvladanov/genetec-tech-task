import type { Meta, StoryObj } from '@storybook/react-vite';
import { DemoApp } from './index';

const meta: Meta<typeof DemoApp> = {
    title: 'App/Demo App',
    component: DemoApp,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof DemoApp>;

export const Default: Story = {};

import type { Meta, StoryObj } from '@storybook/react-vite'
import { DataGrid } from '../../components/DataGrid'
import { generateMockEvents } from '../../utils'
import type { Event, Column } from '../../types'

const meta: Meta<typeof DataGrid<Event>> = {
    title: 'Components/DataGrid',
    component: DataGrid,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const columns: Column<Event>[] = [
    { key: 'title', label: 'Title', accessor: (row) => row.title, sortable: true, filterable: true, width: '30%' },
    { key: 'date', label: 'Date', accessor: (row) => new Date(row.date).toLocaleDateString(), rawAccessor: (row) => new Date(row.date).getTime(), sortable: true, width: '20%' },
    { key: 'description', label: 'Description', accessor: (row) => row.description || '-', filterable: true, width: '50%' },
    { key: 'id', label: 'ID', accessor: (row) => row.id, hidden: true },
]

const data = generateMockEvents(50)

export const Basic: Story = {
    args: {
        data: data.slice(0, 5),
        columns,
        rowKey: 'id',
        initialPageSize: 5,
    },
}

export const WithPagination: Story = {
    args: {
        data,
        columns,
        rowKey: 'id',
        initialPageSize: 10,
    },
}

export const Loading: Story = {
    args: {
        data: [],
        columns,
        rowKey: 'id',
        isLoading: true,
    },
}

export const Empty: Story = {
    args: {
        data: [],
        columns,
        rowKey: 'id',
    },
}

export const ErrorState: Story = {
    args: {
        data: [],
        columns,
        rowKey: 'id',
        error: 'Failed to fetch data',
    },
}

import type { ReactNode } from 'react'

export interface Event {
    id: string
    title: string
    date: string
    description?: string
}

export type SortDirection = 'asc' | 'desc'

export interface SortConfig {
    key: string
    direction: SortDirection
}

export interface Column<T> {
    key: keyof T
    label: string
    accessor: (row: T) => ReactNode
    rawAccessor?: (row: T) => string | number
    width?: string
    sortable?: boolean
    filterable?: boolean
    hidden?: boolean
}

export interface PaginationState {
    page: number
    pageSize: number
    total: number
}

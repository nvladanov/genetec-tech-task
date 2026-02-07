import type { ReactNode } from 'react'

export enum SortDirection {
    ASC = 'asc',
    DESC = 'desc',
}

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

export enum NoDataType {
    EMPTY = 'empty',
    FILTERED = 'filtered',
}

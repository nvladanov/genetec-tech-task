import type { Column, SortConfig } from '../../types'
import { FilterInput, SortIcon, Th, ThContent, Thead, Tr } from './styles'

interface DataGridHeaderProps<T> {
    columns: Column<T>[]
    sortConfig: SortConfig | null
    filters: Record<string, string>
    onSort: (key: keyof T) => void
    onFilter: (key: keyof T, value: string) => void
}

export const DataGridHeader = <T,>({
    columns,
    sortConfig,
    filters,
    onSort,
    onFilter,
}: DataGridHeaderProps<T>) => {
    return (
        <Thead>
            <Tr>
                {columns.map((column) => {
                    if (column.hidden) return null

                    const isSorted = sortConfig?.key === String(column.key)
                    const direction = isSorted ? sortConfig?.direction : undefined

                    return (
                        <Th key={String(column.key)} aria-sort={isSorted ? (direction === 'asc' ? 'ascending' : 'descending') : 'none'}>
                            <ThContent onClick={() => column.sortable && onSort(column.key)}>
                                {column.label}
                                {column.sortable && (
                                    <SortIcon $active={isSorted} $direction={direction}>
                                        {direction === 'desc' ? '▼' : '▲'}
                                    </SortIcon>
                                )}
                            </ThContent>
                            {column.filterable && (
                                <FilterInput
                                    placeholder={`Filter ${column.label}...`}
                                    value={filters[String(column.key)] || ''}
                                    onChange={(e) => onFilter(column.key, e.target.value)}
                                    onClick={(e) => e.stopPropagation()}
                                />
                            )}
                        </Th>
                    )
                })}
            </Tr>
        </Thead>
    )
}

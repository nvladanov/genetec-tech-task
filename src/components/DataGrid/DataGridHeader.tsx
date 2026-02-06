import { ArrowDown, ArrowUp, ArrowUpDown, Filter, Search, X } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { useTheme } from 'styled-components'
import type { Column, SortConfig } from '../../types'
import {
    ClearFilterButton,
    FilterButton,
    FilterContainer,
    FilterIconWrapper,
    FilterInput,
    FilterInputContainer,
    FilterPopover,
    FilterPopoverTitle,
    HeaderLabelContainer,
    SortIconContainer,
    Th,
    ThContent,
    Thead,
    Tr
} from './styles'

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
    const theme = useTheme()
    const [activeFilterCol, setActiveFilterCol] = useState<string | null>(null)
    const popoverRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
                setActiveFilterCol(null)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const toggleFilter = (key: string) => {
        setActiveFilterCol(activeFilterCol === key ? null : key)
    }

    return (
        <Thead>
            <Tr>
                {columns.map((column) => {
                    if (column.hidden) return null

                    const visibleColumns = columns.filter(c => !c.hidden)
                    const isLastVisible = visibleColumns[visibleColumns.length - 1].key === column.key

                    const isSorted = sortConfig?.key === String(column.key)
                    const direction = isSorted ? sortConfig?.direction : undefined
                    const isFiltering = activeFilterCol === String(column.key)
                    const hasFilterValue = !!filters[String(column.key)]

                    return (
                        <Th key={String(column.key)} width={column.width} aria-sort={isSorted ? (direction === 'asc' ? 'ascending' : 'descending') : 'none'}>
                            <ThContent onClick={() => column.sortable && onSort(column.key)}>
                                <HeaderLabelContainer>
                                    <span>{column.label}</span>
                                    {column.sortable && (
                                        <SortIconContainer>
                                            {direction === 'asc' ? (
                                                <ArrowUp size={14} color={theme?.colors?.primary} />
                                            ) : direction === 'desc' ? (
                                                <ArrowDown size={14} color={theme?.colors?.primary} />
                                            ) : (
                                                <ArrowUpDown size={14} style={{ opacity: 1, color: theme?.colors?.muted }} />
                                            )}
                                        </SortIconContainer>
                                    )}
                                </HeaderLabelContainer>

                                {column.filterable && (
                                    <FilterContainer onClick={(e) => e.stopPropagation()} onMouseDown={(e) => e.stopPropagation()}>
                                        <FilterButton
                                            $active={hasFilterValue || isFiltering}
                                            onClick={() => toggleFilter(String(column.key))}
                                            title="Filter"
                                        >
                                            <Filter size={14} style={{ color: theme?.colors?.muted }} />
                                        </FilterButton>

                                        {isFiltering && (
                                            <FilterPopover ref={popoverRef} $rightAligned={isLastVisible}>
                                                <FilterPopoverTitle>
                                                    Filter by {column.label}
                                                </FilterPopoverTitle>
                                                <FilterInputContainer>
                                                    <FilterIconWrapper>
                                                        <Search size={12} style={{ color: theme?.colors?.muted }} />
                                                    </FilterIconWrapper>
                                                    <FilterInput
                                                        autoFocus
                                                        placeholder="Type to filter..."
                                                        value={filters[String(column.key)] || ''}
                                                        onChange={(e) => onFilter(column.key, e.target.value)}
                                                    />
                                                    {filters[String(column.key)] && (
                                                        <ClearFilterButton onClick={() => onFilter(column.key, '')}>
                                                            <X size={12} style={{ color: theme?.colors?.muted }} />
                                                        </ClearFilterButton>
                                                    )}
                                                </FilterInputContainer>
                                            </FilterPopover>
                                        )}
                                    </FilterContainer>
                                )}
                            </ThContent>
                        </Th>
                    )
                })}
            </Tr>
        </Thead>
    )
}

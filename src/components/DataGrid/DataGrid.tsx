import type { Column } from '../../types'
import { StateContainer, Table, TableContainer, Tbody, Td, Tr } from './styles'
import { useDataGrid } from './useDataGrid'
import { DataGridHeader } from './DataGridHeader'
import { DataGridSkeleton } from './DataGridSkeleton'
import { Pagination } from './Pagination'

interface DataGridProps<T> {
    data: T[]
    columns: Column<T>[]
    rowKey: keyof T
    initialPageSize?: number
    isLoading?: boolean
    error?: string | null
}

export const DataGrid = <T,>({
    data,
    columns,
    rowKey,
    initialPageSize = 10,
    isLoading = false,
    error = null,
}: DataGridProps<T>) => {
    const {
        paginatedData,
        sortConfig,
        filters,
        pagination,
        handleSort,
        handleFilter,
    } = useDataGrid({
        data,
        columns,
        initialPageSize,
    })

    if (error) {
        return (
            <TableContainer>
                <StateContainer style={{ color: 'red' }}>
                    Error: {error}
                </StateContainer>
            </TableContainer>
        )
    }

    return (
        <TableContainer>
            <div style={{ overflowX: 'auto' }}>
                <Table>
                    <DataGridHeader
                        columns={columns}
                        sortConfig={sortConfig}
                        filters={filters}
                        onSort={handleSort}
                        onFilter={handleFilter}
                    />
                    <Tbody>
                        {isLoading ? (
                            <DataGridSkeleton columns={columns} rowCount={initialPageSize} />
                        ) : paginatedData.length === 0 ? (
                            <Tr>
                                <Td colSpan={columns.filter(c => !c.hidden).length}>
                                    <StateContainer>No data found.</StateContainer>
                                </Td>
                            </Tr>
                        ) : (
                            paginatedData.map((row) => (
                                <Tr key={String(row[rowKey])}>
                                    {columns.map((column) => {
                                        if (column.hidden) return null
                                        return (
                                            <Td key={`${String(row[rowKey])}-${column.key as string}`}>
                                                {column.accessor(row)}
                                            </Td>
                                        )
                                    })}
                                </Tr>
                            ))
                        )}
                    </Tbody>
                </Table>
            </div>
            {!isLoading && paginatedData.length > 0 && (
                <Pagination
                    page={pagination.page}
                    totalPages={pagination.totalPages}
                    total={pagination.total}
                    pageSize={pagination.pageSize}
                    onPageChange={pagination.handlePageChange}
                    onPageSizeChange={pagination.handlePageSizeChange}
                />
            )}
        </TableContainer>
    )
}

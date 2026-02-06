import type { ChangeEvent } from 'react'
import { PageButton, PaginationContainer } from './styles'

interface PaginationProps {
    page: number
    totalPages: number
    total: number
    pageSize: number
    onPageChange: (page: number) => void
    onPageSizeChange: (pageSize: number) => void
}

export const Pagination = ({
    page,
    totalPages,
    total,
    pageSize,
    onPageChange,
    onPageSizeChange,
}: PaginationProps) => {
    const handlePageSizeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onPageSizeChange(Number(e.target.value))
    }

    return (
        <PaginationContainer>
            <div>
                <span>Rows per page: </span>
                <select
                    value={pageSize}
                    onChange={handlePageSizeChange}
                    style={{ marginLeft: '0.5rem', padding: '0.25rem' }}
                >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                </select>
                <span style={{ marginLeft: '1rem' }}>
                    Showing {total === 0 ? 0 : (page - 1) * pageSize + 1} -{' '}
                    {Math.min(page * pageSize, total)} of {total}
                </span>
            </div>
            <div>
                <PageButton
                    onClick={() => onPageChange(page - 1)}
                    disabled={page === 1}
                    style={{ marginRight: '0.5rem' }}
                >
                    Previous
                </PageButton>
                <PageButton
                    onClick={() => onPageChange(page + 1)}
                    disabled={page === totalPages || totalPages === 0}
                >
                    Next
                </PageButton>
            </div>
        </PaginationContainer>
    )
}

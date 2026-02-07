import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'
import type { ChangeEvent } from 'react'
import {
    PageButton,
    PageSelect,
    PaginationContainer,
    PaginationControls,
    PaginationEllipsis,
    PaginationInfo,
    PaginationRightSide
} from './styles'

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

    const getPageNumbers = () => {
        const pages = []
        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) pages.push(i)
        } else {
            if (page <= 4) {
                pages.push(1, 2, 3, 4, 5, '...', totalPages)
            } else if (page >= totalPages - 3) {
                pages.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages)
            } else {
                pages.push(1, '...', page - 1, page, page + 1, '...', totalPages)
            }
        }
        return pages
    }

    return (
        <PaginationContainer>
            <PaginationInfo>
                Showing {total === 0 ? 0 : (page - 1) * pageSize + 1} -{' '}
                {Math.min(page * pageSize, total)} of {total} results
            </PaginationInfo>

            <PaginationRightSide>
                <PaginationInfo>Rows per page:</PaginationInfo>
                <PageSelect
                    value={pageSize}
                    onChange={handlePageSizeChange}
                >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                </PageSelect>

                <PaginationControls>
                    <PageButton
                        onClick={() => onPageChange(1)}
                        disabled={page === 1}
                        title="First Page"
                    >
                        <ChevronsLeft size={16} />
                    </PageButton>
                    <PageButton
                        onClick={() => onPageChange(page - 1)}
                        disabled={page === 1}
                        title="Previous Page"
                    >
                        <ChevronLeft size={16} />
                    </PageButton>

                    {getPageNumbers().map((p, i) => (
                        typeof p === 'number' ? (
                            <PageButton
                                key={i}
                                $active={p === page}
                                onClick={() => onPageChange(p)}
                            >
                                {p}
                            </PageButton>
                        ) : (
                            <PaginationEllipsis key={i}>
                                {p}
                            </PaginationEllipsis>
                        )
                    ))}

                    <PageButton
                        onClick={() => onPageChange(page + 1)}
                        disabled={page === totalPages || totalPages === 0}
                        title="Next Page"
                    >
                        <ChevronRight size={16} />
                    </PageButton>
                    <PageButton
                        onClick={() => onPageChange(totalPages)}
                        disabled={page === totalPages || totalPages === 0}
                        title="Last Page"
                    >
                        <ChevronsRight size={16} />
                    </PageButton>
                </PaginationControls>
            </PaginationRightSide>
        </PaginationContainer>
    )
}

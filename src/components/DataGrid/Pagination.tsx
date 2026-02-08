import { useMemo, type ChangeEvent } from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
    PageButton,
    PageSelect,
    PaginationContainer,
    PaginationControls,
    PaginationEllipsis,
    PaginationInfo,
    PaginationRightSide,
} from './styles';
import { getPageNumbers, PAGE_SIZE_OPTIONS } from './utils';

interface PaginationProps {
    page: number;
    totalPages: number;
    total: number;
    pageSize: number;
    onPageChange: (page: number) => void;
    onPageSizeChange: (pageSize: number) => void;
}

export const Pagination = ({ page, totalPages, total, pageSize, onPageChange, onPageSizeChange }: PaginationProps) => {
    const { t } = useTranslation();

    const handlePageSizeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onPageSizeChange(Number(e.target.value));
    };

    const pageNumbers = useMemo(() => getPageNumbers(page, totalPages), [page, totalPages]);

    return (
        <PaginationContainer>
            <PaginationInfo>
                {t('datagrid.pagination.rowInfo', {
                    start: total === 0 ? 0 : (page - 1) * pageSize + 1,
                    end: Math.min(page * pageSize, total),
                    total,
                })}
            </PaginationInfo>

            <PaginationRightSide>
                <PaginationInfo>{t('datagrid.pagination.rowsPerPage')}</PaginationInfo>
                <PageSelect
                    value={pageSize}
                    onChange={handlePageSizeChange}
                    aria-label={t('datagrid.pagination.rowsPerPage')}
                >
                    {PAGE_SIZE_OPTIONS.map((size) => (
                        <option key={size} value={size}>
                            {size}
                        </option>
                    ))}
                </PageSelect>

                <PaginationControls>
                    <PageButton
                        onClick={() => onPageChange(1)}
                        disabled={page === 1}
                        title={t('datagrid.pagination.firstPage')}
                    >
                        <ChevronsLeft size={16} />
                    </PageButton>
                    <PageButton
                        onClick={() => onPageChange(page - 1)}
                        disabled={page === 1}
                        title={t('datagrid.pagination.prevPage')}
                    >
                        <ChevronLeft size={16} />
                    </PageButton>

                    {pageNumbers.map((p, i) =>
                        typeof p === 'number' ? (
                            <PageButton key={i} $active={p === page} onClick={() => onPageChange(p)}>
                                {p}
                            </PageButton>
                        ) : (
                            <PaginationEllipsis key={i}>{p}</PaginationEllipsis>
                        )
                    )}

                    <PageButton
                        onClick={() => onPageChange(page + 1)}
                        disabled={page === totalPages || totalPages === 0}
                        title={t('datagrid.pagination.nextPage')}
                    >
                        <ChevronRight size={16} />
                    </PageButton>
                    <PageButton
                        onClick={() => onPageChange(totalPages)}
                        disabled={page === totalPages || totalPages === 0}
                        title={t('datagrid.pagination.lastPage')}
                    >
                        <ChevronsRight size={16} />
                    </PageButton>
                </PaginationControls>
            </PaginationRightSide>
        </PaginationContainer>
    );
};


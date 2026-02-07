import { useMemo, useState } from 'react';
import { type Column, type SortConfig, SortDirection } from '../../types';

interface UseDataGridProps<T> {
    data: T[];
    columns: Column<T>[];
    initialPageSize?: number;
}

interface UseDataGridReturn<T> {
    paginatedData: T[];
    sortConfig: SortConfig | null;
    filters: Record<string, string>;
    pagination: {
        page: number;
        pageSize: number;
        total: number;
        totalPages: number;
        handlePageChange: (newPage: number) => void;
        handlePageSizeChange: (newPageSize: number) => void;
    };
    handleSort: (key: keyof T) => void;
    handleFilter: (key: keyof T, value: string) => void;
    clearAllFilters: () => void;
}

export const useDataGrid = <T>({ data, columns, initialPageSize = 10 }: UseDataGridProps<T>): UseDataGridReturn<T> => {
    const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);
    const [filters, setFilters] = useState<Record<string, string>>({});
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(initialPageSize);

    const filteredData = useMemo(() => {
        return data.filter((row) => {
            return Object.entries(filters).every(([key, value]) => {
                if (!value) return true;
                const column = columns.find((col) => col.key === key);
                if (!column) return true;

                const cellValue = column.accessor ? column.accessor(row) : (row[key as keyof T] as React.ReactNode);
                return String(cellValue).toLowerCase().includes(value.toLowerCase());
            });
        });
    }, [data, filters, columns]);

    const sortedData = useMemo(() => {
        if (!sortConfig) return filteredData;

        return [...filteredData].sort((a, b) => {
            const column = columns.find((col) => col.key === sortConfig.key);
            if (!column) return 0;

            const getSortValue = (row: T) => {
                if (column.rawAccessor) {
                    return column.rawAccessor(row);
                }
                const value = column.accessor ? column.accessor(row) : (row[column.key] as React.ReactNode);
                return typeof value === 'string' || typeof value === 'number' ? value : String(value);
            };

            const valA = getSortValue(a);
            const valB = getSortValue(b);

            if (valA === valB) return 0;

            if (typeof valA === 'number' && typeof valB === 'number') {
                return sortConfig.direction === SortDirection.ASC ? valA - valB : valB - valA;
            }

            const comparison = String(valA).localeCompare(String(valB), undefined, { numeric: true });

            return sortConfig.direction === SortDirection.ASC ? comparison : -comparison;
        });
    }, [filteredData, sortConfig, columns]);

    const paginatedData = useMemo(() => {
        const start = (page - 1) * pageSize;
        return sortedData.slice(start, start + pageSize);
    }, [sortedData, page, pageSize]);

    const totalPages = Math.ceil(filteredData.length / pageSize);

    const handlePageChange = (newPage: number) => {
        setPage(Math.max(1, Math.min(newPage, totalPages)));
    };

    const handlePageSizeChange = (newPageSize: number) => {
        setPageSize(newPageSize);
        setPage(1);
    };

    const handleSort = (key: keyof T) => {
        setSortConfig((prev) => {
            if (prev?.key === key && prev.direction === SortDirection.ASC) {
                return { key: String(key), direction: SortDirection.DESC };
            }
            if (prev?.key === key && prev.direction === SortDirection.DESC) {
                return null;
            }
            return { key: String(key), direction: SortDirection.ASC };
        });
    };

    const handleFilter = (key: keyof T, value: string) => {
        setFilters((prev) => ({
            ...prev,
            [String(key)]: value,
        }));
        setPage(1);
    };

    const clearAllFilters = () => {
        setFilters({});
        setPage(1);
    };

    return {
        paginatedData,
        sortConfig,
        filters,
        pagination: {
            page,
            pageSize,
            total: filteredData.length,
            totalPages,
            handlePageChange,
            handlePageSizeChange,
        },
        handleSort,
        handleFilter,
        clearAllFilters,
    };
};

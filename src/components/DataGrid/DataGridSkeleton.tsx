import type { Column } from '../../types';
import { SkeletonBox, Td, Tr } from './styles';

interface DataGridSkeletonProps<T> {
    columns: Column<T>[];
    rowCount: number;
}

export const DataGridSkeleton = <T,>({ columns, rowCount }: DataGridSkeletonProps<T>) => {
    return (
        <>
            {Array.from({ length: rowCount }).map((_, rowIndex) => (
                <Tr key={`skeleton-${rowIndex}`}>
                    {columns.map(
                        (column, colIndex) =>
                            !column.hidden && (
                                <Td key={`skeleton-cell-${colIndex}`}>
                                    <SkeletonBox />
                                </Td>
                            )
                    )}
                </Tr>
            ))}
        </>
    );
};

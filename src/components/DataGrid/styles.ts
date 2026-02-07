import styled from 'styled-components'

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 0.875rem;
`

export const Thead = styled.thead`
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

export const Th = styled.th<{ width?: string }>`
  padding: ${({ theme }) => theme.spacing.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.foreground};
  white-space: nowrap;
  vertical-align: top;
  width: ${({ width }) => width || 'auto'};
`

export const Tbody = styled.tbody`
  background-color: ${({ theme }) => theme.colors.background};
`

export const Tr = styled.tr`
  transition: background-color ${({ theme }) => theme.transitions.fast};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: none;
  }
`

export const Td = styled.td`
  padding: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.foreground};
`

export const FilterIconWrapper = styled.div`
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  pointer-events: none;
  color: ${({ theme }) => theme.colors.border};
  opacity: 0.7;
`

export const FilterInput = styled.input`
  width: 100%;
  padding: 6px 8px 6px 30px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.foreground};
  font-size: 0.75rem;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}20;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.muted};
    opacity: 0.8;
  }
`

export const PaginationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};
`

export const PageButton = styled.button<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.sm};
  min-width: 32px;
  height: 32px;
  border: 1px solid ${({ theme, $active }) => ($active ? theme.colors.primary : theme.colors.border)};
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: ${({ theme, $active }) => ($active ? theme.colors.primary : theme.colors.background)};
  color: ${({ theme, $active }) => ($active ? theme.colors.white : theme.colors.foreground)};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  margin-left: 4px;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.border}20;
    border-color: ${({ theme }) => theme.colors.border};
  }

  &:hover:not(:disabled) {
    background-color: ${({ theme, $active }) => ($active ? theme.colors.primary : `${theme.colors.border}33`)};
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme, $active }) => ($active ? theme.colors.white : theme.colors.primary)};
  }
`

export const PageSelect = styled.select`
  padding: 4px 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.foreground};
  font-size: 0.875rem;
  margin-left: 8px;
  margin-right: 16px;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

export const PaginationInfo = styled.span`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.875rem;
`

export const StateContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.md} 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.foreground};
  font-size: 0.875rem;
`

export const FilterButton = styled.button<{ $active: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  margin-left: ${({ theme }) => theme.spacing.sm};
  border: none;
  background: transparent;
  color: ${({ theme, $active }) => ($active ? theme.colors.primary : theme.colors.muted)};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radii.md};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.border}33;
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const FilterPopover = styled.div<{ $rightAligned?: boolean }>`
  position: absolute;
  top: 100%;
  left: ${({ $rightAligned }) => ($rightAligned ? 'auto' : '0')};
  right: ${({ $rightAligned }) => ($rightAligned ? '0' : 'auto')};
  z-index: 10;
  min-width: 200px;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  margin-top: 4px;
`

export const ThContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  user-select: none;
  min-height: 20px;
  position: relative;
`

export const HeaderLabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const SortIconContainer = styled.span`
  display: flex;
  align-items: center;
`

export const FilterContainer = styled.div`
  position: relative;
`

export const FilterPopoverTitle = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: 0.75rem;
  font-weight: 500;
`

export const FilterInputContainer = styled.div`
  position: relative;
`

export const ClearFilterButton = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.border};
  padding: 0;

  &:hover {
    color: ${({ theme }) => theme.colors.foreground};
  }
`

export const PaginationRightSide = styled.div`
  display: flex;
  align-items: center;
`

export const PaginationControls = styled.div`
  display: flex;
  align-items: center;
`

export const PaginationEllipsis = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: ${({ theme }) => theme.colors.foreground};
  font-size: 0.875rem;
  margin-left: 4px;
`

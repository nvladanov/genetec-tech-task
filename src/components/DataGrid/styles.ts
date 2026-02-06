import styled from 'styled-components'

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
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

export const Th = styled.th`
  padding: ${({ theme }) => theme.spacing.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.foreground};
  white-space: nowrap;
`

export const Tbody = styled.tbody`
  & > tr:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`

export const Tr = styled.tr`
  transition: background-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.border}33; // 20% opacity
  }
`

export const Td = styled.td`
  padding: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.foreground};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

export const FilterInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.foreground};
  font-size: 0.75rem;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    border-color: transparent;
  }
`

export const SortIcon = styled.span<{ $active: boolean; $direction?: 'asc' | 'desc' }>`
  display: inline-block;
  margin-left: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme, $active }) => ($active ? theme.colors.primary : theme.colors.border)};
  font-size: 0.75rem;
  transition: transform ${({ theme }) => theme.transitions.fast};
  transform: ${({ $direction }) => ($direction === 'desc' ? 'rotate(180deg)' : 'rotate(0deg)')};
`

export const PaginationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

export const PageButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.foreground};
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transitions.fast};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.border}33;
  }
`

export const StateContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.md} 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.foreground};
  font-size: 0.875rem;
`

export const ThContent = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`

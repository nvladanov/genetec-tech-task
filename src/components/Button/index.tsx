import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};

  &:hover {
    opacity: 0.9;
  }
`

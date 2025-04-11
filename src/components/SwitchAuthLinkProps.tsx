import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { SwitchAuthLinkProps } from '@/types'
import { pxToRem } from '@/utils'

const Container = styled.p`
  margin-top: ${pxToRem(16)};
  font-size: ${pxToRem(15)};
  color: ${(props) => props.color || 'inherit'};
  text-align: center;
`
const StyledLink = styled(Link)`
  color: #c8a35f;
  margin-left: ${pxToRem(7)};
  text-decoration: none;
  font-weight: 400;

  &:hover {
    color: #e8c27b;
    text-decoration: underline;
  }
`

export function SwitchAuthLink({ to, message, linkText }: SwitchAuthLinkProps) {
  return (
    <Container>
      {message}
      <StyledLink to={to}>{linkText}</StyledLink>
    </Container>
  )
}

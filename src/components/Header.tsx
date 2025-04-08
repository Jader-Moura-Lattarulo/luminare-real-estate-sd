import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { LogoTxt } from '@/components'
import { Avatar, Box, Container } from '@mui/material'
import { pxToRem } from '@/utils'

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.appDefaultStroke};
  border-bottom: ${pxToRem(1)} solid ${(props) => props.theme.appDefaultStroke};
  margin-bottom: ${pxToRem(37)};
  width: 100%;
`
function Header() {
  return (
    <StyledHeader>
      <Container maxWidth="lg">
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            height: pxToRem(64),
          }}
        >
          <Link to="/home">
            <LogoTxt height={50} width={190} margin={0} />
          </Link>
          <Link to="/profile">
            <Avatar
              alt="Luminare Avatar"
              src="/luminare-avatar.png"
              sx={{ width: pxToRem(50), height: pxToRem(50) }}
            />
          </Link>
        </Box>
      </Container>
    </StyledHeader>
  )
}

export default Header

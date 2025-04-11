import styled from 'styled-components'
import { JmdevLogo, StyledH1, FooterUl } from '@/components'
import { Box, Container } from '@mui/material'
import { pxToRem } from '@/utils'
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import { FooterProps } from '@/types'

const StyledFooter = styled.footer<FooterProps>`
  background-color: ${(props) => props.theme.appDefaultStroke};
  border-bottom: ${pxToRem(1)} solid ${(props) => props.theme.appDefaultStroke};
  width: 100%;
  margin-top: ${(props) => pxToRem(props.marginTop ?? 0)}
`
function Footer({marginTop}: FooterProps) {
  return (
    <StyledFooter marginTop={marginTop}>
      <Container maxWidth="lg">
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: pxToRem(125),
          }}
        >
          <a
            href="https://www.linkedin.com/in/dev-jader/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <JmdevLogo height={55} width={50} />
          </a>

          <Box>
            <StyledH1>Contatos</StyledH1>
            <FooterUl>
              <li>
                <a
                  href="https://www.linkedin.com/in/dev-jader/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={22} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Jader-Moura-Lattarulo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={22} />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5511991779858"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp size={22} />
                </a>
              </li>
              <li>
                <a
                  href="mailto:jader.dev.moura@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope size={22} />
                </a>
              </li>
            </FooterUl>
          </Box>
        </Box>
      </Container>
    </StyledFooter>
  )
}

export default Footer

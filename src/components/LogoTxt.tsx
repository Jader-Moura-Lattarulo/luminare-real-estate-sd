import styled from 'styled-components'
import { pxToRem } from '@/utils'

export const LogoTxt = styled.figure<{
  height: number
  width: number
  margin: number
}>`
  background-image: url(/${(props) => props.theme.appLogoTxt});
  background-size: cover;
  height: ${(props) => pxToRem(props.height)};
  width: ${(props) => pxToRem(props.width)};
  margin: ${(props) => pxToRem(props.margin)};
`

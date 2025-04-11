import styled from 'styled-components'
import { pxToRem } from '@/utils'

export const JmdevLogo = styled.figure<{ height: number; width: number }>`
  background-image: url(/jmdev-logo-fundotransparente.png);
  background-size: cover;
  height: ${(props) => pxToRem(props.height)};
  width: ${(props) => pxToRem(props.width)};
`

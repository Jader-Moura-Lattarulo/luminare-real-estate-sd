import styled from 'styled-components'
import { TypographiesProps } from '@/types'
import { pxToRem } from '@/utils'

export const StyledH1 = styled.h1<TypographiesProps>`
  color: ${(props) => props.color || 'inherit'};
  font-family: 'Cinzel Decorative', serif;
  font-size: ${(props) => pxToRem(props.fontSize || 24)};
  font-weight: ${(props) => props.fontWeight || 600};
  letter-spacing: ${pxToRem(-1)};
  line-height: ${(props) => pxToRem(props.lineHeight || 36)};
`

export const StyledH2 = styled.h2<TypographiesProps>`
  color: ${(props) => props.color || 'inherit'};
  font-family: 'Cinzel Decorative', serif;
  font-size: ${(props) => pxToRem(props.fontSize || 16)};
  font-weight: ${(props) => props.fontWeight || 600};
  line-height: ${(props) => pxToRem(props.lineHeight || 24)};
`

export const StyledH3 = styled.h2<TypographiesProps>`
  color: ${(props) => props.color || 'inherit'};
  font-family: 'Cinzel Decorative', serif;
  font-size: ${(props) => pxToRem(props.fontSize || 16)};
  font-weight: ${(props) => props.fontWeight || 600};
  line-height: ${(props) => pxToRem(props.lineHeight || 24)};
`

export const StyledP = styled.p<TypographiesProps>`
  color: ${(props) => props.color || 'inherit'};
  font-family: 'Lato', sans-serif;
  font-size: ${(props) => pxToRem(props.fontSize || 16)};
  font-weight: ${(props) => props.fontWeight || 400};
  line-height: ${(props) => pxToRem(props.lineHeight || 24)};
`

export const StyledSpan = styled.span<TypographiesProps>`
  color: ${(props) => props.color || 'inherit'};
  font-family: 'Lato', sans-serif;
  font-size: ${(props) => pxToRem(props.fontSize || 16)};
  font-weight: ${(props) => props.fontWeight || 400};
  line-height: ${(props) => pxToRem(props.lineHeight || 24)};
`

export const StyledUl = styled.ul<TypographiesProps>`
  color: ${(props) => props.color || 'inherit'};
  font-family: 'Lato', sans-serif;
  font-size: ${(props) => pxToRem(props.fontSize || 16)};
  font-weight: ${(props) => props.fontWeight || 400};
  line-height: ${(props) => pxToRem(props.lineHeight || 24)};
  list-style-position: inside;
  li {
    list-style-position: outside;
    margin-left: ${pxToRem(15)};
  }
`

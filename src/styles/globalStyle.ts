import { createGlobalStyle } from 'styled-components'
import { DefaultTheme } from 'styled-components'
import { pxToRem } from '@/utils'

export const GlobalStyle = createGlobalStyle<{ theme?: DefaultTheme }>`
    html, body, #root {
        height: 100%;
        margin: 0;
        padding: 0%;
    }
    
    body {
        background: ${(props) => props.theme.appBackground};
        color: ${(props) => props.theme.appColor};
        font-family: "Lato", sans-serif;
        font-weight: 550;
    }

    figure {
        margin: 0;
        padding: 0;
    }


    h1, h2, p, ul, li {
        margin: 0;
        padding: 0;
    }

    table th {
        font-family: 'Cinzel Decorative', serif;
    }

    .mb-1 {
        margin-bottom: ${pxToRem(16)};
    }

    .mb-2 {
        margin-bottom: ${pxToRem(32)};
    }

    .skeleton-loading {
        animation: skeletonLoading 2s infinite alternate;
    }

    @keyframes skeletonLoading {
        from {
            background-color: ${(props) => props.theme.appSkeletonFrom}
        }
        to {
            background-color: ${(props) => props.theme.appSkeletonTo}
        }
    }

    .skeleton-loading-mh-1 {
        min-height: ${pxToRem(175)}
    }

    .skeleton-loading-mh-2 {
        min-height: ${pxToRem(400)}
    }
`

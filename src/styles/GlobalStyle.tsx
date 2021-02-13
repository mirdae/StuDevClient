import reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components'
import PALETTE from './color-variables'

const GlobalStyle = createGlobalStyle`
    ${reset}

    *{
        box-sizing:border-box;
        padding:0;
        padding:0;
    }

    body{
        background-color:${PALETTE.BACKGROUND};
        font-family:'Roboto', sans-serif;
    }

    a{ 
        color:inherit;
        text-decoration:none;
    }
`
export default GlobalStyle

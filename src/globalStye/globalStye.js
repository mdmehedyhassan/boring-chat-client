import { createGlobalStyle } from "styled-components"

export const lightTheme = {
    bodyBg: '#e6e6e6',
    bodyText: '#1a1a1a',
}
export const darkTheme = {
    bodyBg: '#1a1a1a',
    bodyText: '#e6e6e6',
}
export const GlobalStyles = createGlobalStyle `
    body{
        background: ${props => props.theme.bodyBg};
        color: ${props => props.theme.bodyText};
    }
`
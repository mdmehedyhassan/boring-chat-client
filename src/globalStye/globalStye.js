import { createGlobalStyle } from "styled-components"

export const lightTheme = {
    bodyBg: '#e6e6e6',
    bodyText: '#1a1a1a',
    messageBg: '#ffffff',
    boxShadow: '1px 1px 3px #e34236, -1px -1px 3px #e34236',
    hoverBoxShadow: '1px 1px 3px #43f53d, -1px -1px 3px #43f53d',
}
export const darkTheme = {
    bodyBg: '#1a1a1a',
    bodyText: '#e6e6e6',
    messageBg: '#000000',
    boxShadow: '1px 1px 3px #43f53d, -1px -1px 3px #43f53d',
    hoverBoxShadow: '1px 1px 3px #e34236, -1px -1px 3px #e34236',
}
export const GlobalStyles = createGlobalStyle `
    body{
        background: ${props => props.theme.bodyBg};
        color: ${props => props.theme.bodyText};
    }
    .message-global-style{
        background: ${props => props.theme.messageBg};
        border-radius: 10px;
    }
    .message-global-style{
        margin: 15px 0;
        box-shadow: ${props => props.theme.boxShadow};
    }
    .people-global-style{
        margin: 15px 0;
        box-shadow: ${props => props.theme.boxShadow};
    }
    .people-global-style:hover{
        box-shadow: ${props => props.theme.hoverBoxShadow};
    }
    .friend-global-style{
        margin: 15px 0;
        box-shadow: ${props => props.theme.boxShadow};
    }
    .friend-global-style:hover{
        box-shadow: ${props => props.theme.hoverBoxShadow};
    }
    .post-global-style{
        margin: 15px 0;
        background: ${props => props.theme.messageBg};
        border-radius: 15px;
        box-shadow: ${props => props.theme.boxShadow};
    }
    .post-global-style:hover{
        box-shadow: ${props => props.theme.hoverBoxShadow};
    }
`
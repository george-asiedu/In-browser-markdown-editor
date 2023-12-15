import React, { useContext } from 'react';
import styled, { createGlobalStyle, DefaultTheme, ThemeProvider } from 'styled-components'
import { Theme, themes } from './themes/Themes';
import { ThemeContext, ThemeContextProvider } from './themes/ThemeContext';

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme & Theme }>`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto Slab', serif;
    font-family: 'Roboto Mono', monospace;
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.background.main};
  }

  h1 {
    font-family: 'Roboto Slab', serif;
    font-weight: 700;
    font-size: 32px;
    color: ${({ theme }) => theme.color.htmlheaders};
  }

  h2 {
    font-family: 'Roboto Slab', serif;
    font-weight: 300;
    font-size: 28px;
    color: ${({ theme }) => theme.color.htmlheaders};
  }

  h3 {
    font-family: 'Roboto Slab', serif;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.color.htmlheaders};
  }

  h4 {
    font-family: 'Roboto Slab', serif;
    font-weight: 700;
    font-size: 20px;
    color: ${({ theme }) => theme.color.htmlheaders};
  }

  h5 {
    font-family: 'Roboto Slab', serif;
    font-weight: 700;
    font-size: 16px;
    color: ${({ theme }) => theme.color.htmlheaders};
  }

  h6 {
    font-family: 'Roboto Slab', serif;
    font-weight: 700;
    font-size: 14px;
    color: ${({ theme }) => theme.color.h6};
  }

  p {
    font-family: 'Roboto Slab', serif;
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme.color.previewbody};
  }

  ol li {
    font-family: 'Roboto Slab', serif;
    font-weight: 400;
    font-size: 14px;
    padding-left: 9px;
  }

  ul li {
    font-family: 'Roboto Slab', serif;
    font-weight: 400;
    font-size: 14px;
    padding-left: 9px;

    &::marker {
      color: #E46643;
      font-size: 6px;
    }
  }

  blockquote {
    display: flex;
    align-items: center;
    margin: 0px;
    padding: 24px 24px 24px 20px;
    width: 90%;
    border-radius: 4px;
    border-left: 4px solid #E46643;
    background-color: ${({ theme }) => theme.background.blockquote};;
  }
  blockquote p {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.color.blockquote};;
  }
  blockquote p a {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.color.blockquote};;
  }
  p code {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.color.code};;
  }
  pre {
    margin: 0px;
    padding: 24px 24px 24px 20px;
    width: 90%;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.background.blockquote};;
  }
  pre code {
    white-space: pre-wrap;
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.color.code};;
  }
`;

const StyledApp = styled.div``;

const App: React.FC = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <ThemeContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle theme={themes.light}/>
        <StyledApp></StyledApp>
      </ThemeProvider>     
    </ThemeContextProvider>
  )
}

export default App
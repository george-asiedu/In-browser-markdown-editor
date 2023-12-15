import React, { useContext } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import { themes } from './themes/Themes';
import { ThemeContext, ThemeContextProvider } from './themes/ThemeContext';
import { GlobalStyle } from './GlobalStyles.module';



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
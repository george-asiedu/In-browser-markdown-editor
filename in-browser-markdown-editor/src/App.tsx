import React, { useContext, useState, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import { themes } from './themes/Themes';
import { ThemeContext, ThemeContextProvider } from './themes/ThemeContext';
import { GlobalStyle } from './GlobalStyles.module';
import Navigation from './components/navigation/Navigation';
import CustomModal from './components/modal/Modal';

const StyledApp = styled.div``;

const App: React.FC = () => {
  const { theme } = useContext(ThemeContext)
  const [showSidebar, setShowSidebar] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSidebar = () => {
    setShowSidebar(showSidebar ? false : true)
  }

  const handleEnter = () => {
    inputRef.current?.focus()
  }

  return (
    <ThemeContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle theme={themes.dark}/>
        <StyledApp>
          <CustomModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
            <Navigation
                showSidebar={showSidebar}
                handleSidebar={handleSidebar}
                handleEnter={handleEnter}
                setModalOpen={setModalOpen}
             />
        </StyledApp>
      </ThemeProvider>     
    </ThemeContextProvider>
  )
}

export default App
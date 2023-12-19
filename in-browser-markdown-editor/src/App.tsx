import React, { useContext, useState, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import { themes } from './themes/Themes';
import { ThemeContext, ThemeContextProvider } from './themes/ThemeContext';
import { GlobalStyle } from './GlobalStyles.module';
import Navigation from './components/navigation/Navigation';
import CustomModal from './components/modal/Modal';
import DocumentContextWrapper from './documents/DocumentContext';

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
    <>
      <GlobalStyle theme={theme} />
        <StyledApp>
          <CustomModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
            <Navigation
                showSidebar={showSidebar}
                handleSidebar={handleSidebar}
                handleEnter={handleEnter}
                setModalOpen={setModalOpen}
            />
        </StyledApp>
    </>
    // <DocumentContextWrapper>
    //   <ThemeContextProvider>
    //     <ThemeProvider theme={theme}>
          
    //     </ThemeProvider>     
    //   </ThemeContextProvider>
    // </DocumentContextWrapper>
  )
}

export default App
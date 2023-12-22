import React, { useContext, useState, useRef } from 'react';
import styled from 'styled-components'
import { ThemeContext } from './themes/ThemeContext';
import { GlobalStyle } from './GlobalStyles.module';
import Navigation from './components/navigation/Navigation';
import CustomModal from './components/modal/Modal';
import Home from './components/home/Home';

const StyledApp = styled.div``;

const App: React.FC = () => {
  const { theme } = useContext(ThemeContext)
  const [showSidebar, setShowSidebar] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const inputRef = useRef<HTMLTextAreaElement>(null);

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
            <Home inputRef={inputRef} showsidebar={showSidebar} />
        </StyledApp>
    </>
  )
}

export default App
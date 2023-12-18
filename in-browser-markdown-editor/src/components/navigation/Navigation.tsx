import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

interface NavigationProps {
    showSidebar: boolean;
    handleSidebar: () => void;
    handleEnter: () => void;
    setModalOpen: (isOpen: boolean) => void;
}

const NavigationStyles = styled.div``

const Navigation: React.FC = ({
    showSidebar,
    handleSidebar,
    handleEnter,
    setModalOpen
}) => {

    return (
        <NavigationStyles>
            <Navbar
                showSidebar={showSidebar}
                handleSidebar={handleSidebar}
                handleEnter={handleEnter}
                setModalOpen={setModalOpen} 
            />
        </NavigationStyles>
    )
}

export default Navigation
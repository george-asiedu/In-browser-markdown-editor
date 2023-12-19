import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import Sidebar from './Sidebar';

interface NavigationProps {
    showSidebar: boolean;
    handleSidebar: () => void;
    handleEnter: () => void;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavigationStyles = styled.div``

const Navigation: React.FC<NavigationProps> = ({
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
            <Sidebar  
                showSidebar={showSidebar}
                handleSidebar={handleSidebar}
            />
        </NavigationStyles>
    )
}

export default Navigation
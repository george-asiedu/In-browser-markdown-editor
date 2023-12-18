import React from 'react'
import styled from 'styled-components'
import iconDocument from '../../assets/icon-document.svg'

const sidebarStyles = styled.div`
    height: 100vh;
    width: 250px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #1d1f22;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;

    transform: translateX(
    ${({ showSidebar }) => (showSidebar ? "0px" : "-250px")}
    );
    transition: 0.3s;
`

const DocumentsContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    padding-left: 24px;
`

const Sidebar: React.FC = () => {
    return (
        
    )
}

export default Sidebar
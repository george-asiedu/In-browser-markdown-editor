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
const DocumentsTitle = styled.div`
    margin-top: 27px;
    margin-bottom: 29px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 2px;
    color: #7c8187;
`

const DocumentsList = styled.div`
  max-height: calc(100vh - 208px);
  margin-top: 24px;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  overflow-y: scroll;
`

const Sidebar: React.FC = () => {
    return (
        
    )
}

export default Sidebar
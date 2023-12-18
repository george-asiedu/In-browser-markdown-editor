import React from 'react'
import styled from 'styled-components'


const NavbarStyles = styled.div`
    width: 100vw;
    height: 72px;
    color: #ffffff;
    background-color: #2b2d31;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    shadow: 0px 3px 0px rgba(0, 0, 0, 0.4);
    transform: translateX(
        ${({ showSidebar }) => (showSidebar ? "250px" : "0px")}
    );
    transition: 0.3s;

    @media screen and (max-width: 768px) {
        height: 56px;
    }
`

const LeftContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
`

const HamburgerButton = styled.div`
    height: 72px;
    width: 72px;
    background-color: #35393f;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: #e46643;
    }

    @media screen and (max-width: 768px) {
        height: 56px;
        width: 56px;
    }
`

const Navbar: React.FC = () => {
  return (
    <div>

    </div>
  )
}

export default Navbar
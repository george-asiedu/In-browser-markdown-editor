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
    transform: translateX(
    ${({ showSidebar }) => (showSidebar ? "250px" : "0px")}
    );
    transition: 0.3s;

    @media screen and (max-width: 768px) {
    height: 56px;
    }
`

const Navbar: React.FC = () => {
  return (
    <div>

    </div>
  )
}

export default Navbar
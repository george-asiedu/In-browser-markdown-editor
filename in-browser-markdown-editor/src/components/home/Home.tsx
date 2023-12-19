import React from "react"
import styled from "styled-components"
import { Theme } from '../../themes/Themes'

interface HomeProps {
  inputRef: React.RefObject<any>
  showSidebar: boolean
}

const HomeStyles = styled.div<{ showSidebar: boolean ; theme: Theme}>`
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    width: 100%;
    position: fixed;
    color: ${(props) => props.theme.color.markdownbody};
    background-color: ${(props) => props.theme.background.main};
    transform: translateX(${({ showSidebar }) => (showSidebar ? "250px" : "0px")});
    transition: 0.3s;
`

const Divider = styled.div<{ theme: Theme }>`
    height: 100%;
    width: 1px;
    background-color: ${({ theme }) => theme.divider};

    @media screen and (max-width: 768px) {
      display: none;
    }
`

const Home: React.FC = () => {
  return (
    <div>Home</div>
  )
}

export default Home
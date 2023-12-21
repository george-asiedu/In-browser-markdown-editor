import React, { useContext, useState } from "react"
import styled from "styled-components"
import { Theme } from '../../themes/Themes'
import { ThemeContext } from "../../themes/ThemeContext"
import { DocumentContext } from "../../documents/DocumentContext"
import MarkdownEditorWindow from "./MarkdownEditorWindow"
import PreviewWindow from "./PreviewWindow"

interface HomeProps {
  inputRef: React.RefObject<HTMLTextAreaElement>
  showSidebar: boolean
}

const HomeStyles = styled.div<{ showSidebar: boolean ; theme: Theme}>`
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    width: 100%;
    position: fixed;
    color: ${({theme}) => theme.color.markdownbody};
    background-color: ${({theme}) => theme.background.main};
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

const CreateDocumentMessage = styled.div<{ theme: Theme}>`
    margin-top: 12px;
    margin-left: 16px;
    font-family: "Roboto Mono";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${({theme}) => theme.color.markdownbody};
`

const Home: React.FC<HomeProps> = ({ inputRef, showSidebar }) => {
  const { theme } = useContext(ThemeContext)
  const { activeDocument } = useContext(DocumentContext)
  const [ showPreview, setShowPreview ] = useState(false)

  const handlePreview = () => {
    setShowPreview((prev) => !prev)
  }

  return (
    <HomeStyles showSidebar={showSidebar} theme={theme}>
      {activeDocument ? (
        <>
          <MarkdownEditorWindow
            ref={inputRef}
            showPreview={showPreview}
            handlePreview={handlePreview}
          />
          <Divider theme={theme} />
          <PreviewWindow showPreview={showPreview} handlePreview={handlePreview} />
        </>
      ) : (
        <CreateDocumentMessage theme={theme}>
          Looks like you deleted everything! Please create a new document in the sidebar 
        </CreateDocumentMessage>
      )}
    </HomeStyles>
  )
}

Home.displayName = "Home";
export default Home
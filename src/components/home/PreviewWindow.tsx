import React, { useContext } from 'react'
import styled from 'styled-components'
import { Theme } from '../../themes/Themes'
import PreviewButton from './PreviewButton'
import { ThemeContext } from '../../themes/ThemeContext'
import { DocumentContext } from '../../documents/DocumentContext'
import ReactMarkdown from 'react-markdown'

interface PreviewWindowProps {
    showpreview: boolean
    handlePreview: () => void
}

const PreviewStyles = styled.div<{ showpreview: boolean; theme: Theme }>`
    display: flex;
    flex-flow: column nowrap;
    height: 100%;
    width: ${({ showpreview }) => (showpreview ? "100%" : "50%")};
    color: ${(props) => props.theme.color.markdownbody};
    background-color: ${(props) => props.theme.background.main};

    @media screen and (max-width: 768px) {
        width: ${({ showpreview }) => (showpreview ? "100%" : "0%")};
    }
`

const TitleContainer = styled.div<{ theme: Theme }>`
    height: 42px;
    font-family: "Roboto";
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 2px;
    padding-left: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.color.sectionheader};
    background-color: ${({ theme }) => theme.background.sectionheader};
`

const ShowMarkdownButton = styled(PreviewButton)``

const MarkdownContainer = styled.div`
    height: calc(100% - 120px);
    padding: 0px 5%;
    overflow: auto;
`

const PreviewWindow: React.FC<PreviewWindowProps> = ({ showpreview, handlePreview }) => {
    const { theme } = useContext(ThemeContext)
    const { activeDocument } = useContext(DocumentContext)


    return (
        <PreviewStyles theme={theme} showpreview={showpreview}>
            <TitleContainer theme={theme}>
                PREVIEW
                <ShowMarkdownButton
                    showpreview={showpreview}
                    handlePreview={handlePreview}
                    isPreviewWindow={true}
                />
            </TitleContainer>
            <MarkdownContainer>
                <ReactMarkdown>
                    {activeDocument ? activeDocument.content : '#Welcome !!!'}
                </ReactMarkdown>
            </MarkdownContainer>
        </PreviewStyles>
    )
}

PreviewWindow.displayName = 'MarkdownEditor'

export default PreviewWindow
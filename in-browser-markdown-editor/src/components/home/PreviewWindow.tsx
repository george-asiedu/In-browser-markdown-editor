import React, { useContext } from 'react'
import styled from 'styled-components'
import { Theme } from '../../themes/Themes'
import PreviewButton from './PreviewButton'
import { ThemeContext } from '../../themes/ThemeContext'
import { DocumentContext } from '../../documents/DocumentContext'
import ReactMarkdown from 'react-markdown'

interface PreviewWindowProps {
    showPreview: boolean
    handlePreview: () => void
}

const PreviewStyles = styled.div<{ showPreview: boolean; theme: Theme }>`
    display: flex;
    flex-flow: column nowrap;
    height: 100%;
    width: ${({ showPreview }) => (showPreview ? "100%" : "50%")};
    color: ${(props) => props.theme.color.markdownbody};
    background-color: ${(props) => props.theme.background.main};

    @media screen and (max-width: 768px) {
        width: ${({ showPreview }) => (showPreview ? "100%" : "0%")};
    }
`

const TitleContainer = styled.div<{ theme: Theme }>`
    height: 42px;
    font-family: "Roboto";
    font-style: normal;
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
    padding-left: 16px;
    padding-right: 24px;
    overflow: auto;
`

const PreviewWindow: React.FC<PreviewWindowProps> = ({ showPreview, handlePreview }) => {
    const { theme } = useContext(ThemeContext)
    const { activeDocument } = useContext(DocumentContext)


    return (
        <PreviewStyles theme={theme} showPreview={showPreview}>
            <TitleContainer theme={theme}>
                PREVIEW
                <ShowMarkdownButton
                    showPreview={showPreview}
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
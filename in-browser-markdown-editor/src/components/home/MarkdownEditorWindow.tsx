import React, { ChangeEvent, forwardRef, useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../themes/ThemeContext'
import { DocumentContext } from '../../documents/DocumentContext'

interface MarkdownEditorProps {
    showPreview: boolean
    handlePrview: () => void
}

const MarkdownEditorStyles = styled.div<{ showPreview: boolean}>`
    display: ${({ showPreview }) => (showPreview ? 'none': 'flex')};
    flex-flow: column nowrap;
    height: 100%;
    width: 50%;
    outline: none;
    border: none;

    @media screen and (max-width: 768px) {
        width: ${({ showPreview }) => (showPreview ? "0%" : "1000%")};
    }
`

const TitleContainer = styled.div`
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

const ShowPreviewButton = styled(PreviewButton)`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
    }
`

const Editor = styled.textarea<{ theme: any }>`
    height: calc(100% - 120px);
    padding-left: 16px;
    outline: none;
    border: none;
    font-family: "Roboto Mono";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.color.markdownbody};
    background-color: ${({ theme }) => theme.background.main};
`

const MarkdownEditorWindow: React.FC = forwardRef<HTMLTextAreaElement, MarkdownEditorProps>(props, inputRef) => {
    const { theme } = useContext(ThemeContext)
    const { activeDocument, onDocumentContentChange } = useContext(DocumentContext)

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onDocumentContentChange(e.target.value)
    }
  return (
    <div>

    </div>
  )
}

export default MarkdownEditorWindow
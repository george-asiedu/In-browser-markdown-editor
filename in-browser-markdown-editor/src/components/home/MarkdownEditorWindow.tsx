import React from 'react'
import styled from 'styled-components'

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

const MarkdownEditorWindow: React.FC = () => {
  return (
    <div>

    </div>
  )
}

export default MarkdownEditorWindow
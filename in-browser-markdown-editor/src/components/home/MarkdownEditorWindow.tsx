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

const MarkdownEditorWindow: React.FC = () => {
  return (
    <div>

    </div>
  )
}

export default MarkdownEditorWindow
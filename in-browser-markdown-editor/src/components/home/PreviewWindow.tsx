import React from 'react'
import styled from 'styled-components'

interface PreviewStylesProps {
    showPreview: boolean
}

const PreviewStyles = styled.div<PreviewStylesProps>`
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

const PreviewWindow: React.FC = () => {
  return (
    <div>PreviewWindow</div>
  )
}

export default PreviewWindow
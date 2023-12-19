import React from 'react'
import styled from 'styled-components'
import { Theme } from '../../themes/Themes'

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

const TitleContainer = styled.div<{theme: Theme}>`
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

const PreviewWindow: React.FC = () => {
  return (
    <div>PreviewWindow</div>
  )
}

export default PreviewWindow
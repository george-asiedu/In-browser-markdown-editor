import React, { useContext } from 'react'
import styled from 'styled-components'
import iconShowPreview from '../../assets/icon-show-preview.svg'
import iconHidePreview from '../../assets/icon-hide-preview.svg'
import { ThemeContext } from '../../themes/ThemeContext'

interface PreviewButtonStylesProps {
    theme: {
        background: {
            sectionheader: string
        }
    }
}

interface PreviewButtonProps {
    showPreview: boolean
    handlePreview: () => void
    isPreviewWindow: boolean 
    className?: string
}

const PreviewButtonStyles = styled.div<PreviewButtonStylesProps>`
    height: 18px;
    width: 18px;
    margin-right: 24px;
    padding: 0%;
    cursor: pointer;
    border: none;
    background-color: ${({ theme }) => theme.background.sectionheader};
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        color: #e46643;
    }
`

const PreviewIcon = styled.img`
  &:hover {
    filter: invert(55%) sepia(52%) saturate(4781%) hue-rotate(339deg)
      brightness(99%) contrast(80%);
  }
`

const PreviewButton: React.FC<PreviewButtonProps> = ({ showPreview, handlePreview, className}) => {
    const { theme } = useContext(ThemeContext)

    return (
        <PreviewButtonStyles
            theme={theme}
            onClick={() => handlePreview}
            className={className}
        >
            <PreviewIcon src={showPreview ? iconHidePreview : iconShowPreview} />
        </PreviewButtonStyles>
    )
}

export default PreviewButton
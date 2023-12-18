import React, { useContext } from 'react'
import styled, { DefaultTheme, ThemeProvider } from 'styled-components'
import Modal from 'react-modal'
import { ThemeContext } from '../../themes/ThemeContext';
import { DocumentContext } from '../../documents/DocumentContext';

interface CustomModalProps {
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface StyledModalProps {
    theme: DefaultTheme;
}

interface StyledComponentProps {
    theme: DefaultTheme;
}

const ModalStyles = styled(Modal)<StyledModalProps>`
    position: fixed;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    padding: 24px;
    display: flex;
    flex-flow: column nowrap;
    background-color: ${({ theme }) => theme.background.main};
`

const HeaderStyles = styled.div<StyledComponentProps>`
    width: 295px;
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.color.htmlheaders};
`

const TextStyles = styled.div<StyledComponentProps>`
    width: 295px;
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.color.previewbody};
`

const ButtonStyles = styled.button<StyledComponentProps>`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    width: 295px;
    height: 40px;
    margin: 0px;
    padding: 0;
    border: none;
    border-radius: 4px;
    color: #ffffff;
    background-color: #e46643;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;

    &:hover {
        background-color: #f39765;
    }
`

const CustomModal: React.FC<CustomModalProps> = ({ modalOpen, setModalOpen }) => {
    const { theme } = useContext(ThemeContext)
    const { deleteDocument } = useContext(DocumentContext)

    return (
        <ThemeProvider theme={theme}>
            <ModalStyles
            isOpen={modalOpen}
            onRequestClose={() => setModalOpen(false)}
            style={{
                overlay: {
                    backgroundColor: 'rgba(124, 129, 135, 0.5)',
                }
            }}
        >
            <HeaderStyles theme={theme}>Delete this document?</HeaderStyles>
            <TextStyles theme={theme}>
                Are you sure you want to delete the 'welcome.md' and its content?
                This action cannot be reveresed.
            </TextStyles>
            <ButtonStyles 
                onClick={() => {
                setModalOpen(false)
                deleteDocument()
            }}>
                Confirm & Delete
            </ButtonStyles>
        </ModalStyles>
        </ThemeProvider>
    )
}

export default CustomModal
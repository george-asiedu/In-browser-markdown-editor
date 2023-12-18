import React from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'

const ModalStyles = styled(Modal)`
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

const HeaderStyles = styled.div`
    width: 295px;
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.color.htmlheaders};
`

const Textstyles = styled.div`
    width: 295px;
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.color.previewbody};
`

const ButtonStyles = styled.button`
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

const CustomModal: React.FC = () => {
  return (
    <div></div>
  )
}

export default CustomModal
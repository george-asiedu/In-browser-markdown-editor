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

const CustomModal: React.FC = () => {
  return (
    <div></div>
  )
}

export default CustomModal
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

const CustomModal: React.FC = () => {
  return (
    <div></div>
  )
}

export default CustomModal
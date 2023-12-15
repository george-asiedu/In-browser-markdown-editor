import React from 'react'
import styled from 'styled-components'
import iconDelete from '../../assets/icon-delete.svg'

interface DeleteButtonProps {
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeletButtonStyle = styled.button`
    height: 20px;
    width: 18px;
    margin-right: 24px;
    padding: 0%;
    background-color: #2b2d31;
    cursor: pointer;
    border: none;
`

const DeleteIcon = styled.img<{ disabled: boolean }>`
    &:hover {
        filter: ${({ disabled }) => disabled ? '' : 'invert(55%) sepia(52%) saturate(4781%) hue-rotate(339deg) brightness(99%) contrast(80%)'}
    }
`

const DeletButton: React.FC<DeleteButtonProps> = ({ setModalOpen }) => {
  return (
    <DeletButtonStyle 
        onClick={() => { setModalOpen(true)}} 
        disabled={documents.length === 0 ? true : false}
    >
        <DeleteIcon src={iconDelete} disabled={documents.length === 0} />
    </DeletButtonStyle>
  )
}

export default DeletButton
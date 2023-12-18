import React from 'react'
import styled from 'styled-components'
import iconSave from '../../assets/icon-save.svg'


const SaveButtonStyles = styled.button`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    width: 152px;
    height: 40px;
    padding: 0px 17px;
    margin: 0px;
    margin-right: 16px;
    border: none;
    border-radius: 4px;
    color: #ffffff;
    background-color: #e46643;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    cursor: pointer;

    &:hover {
        background-color: ${({ disabled }) => (disabled ? "#e46643" : "#f39765")};
    }

    @media screen and (max-width: 768px) {
        width: 40px;
        justify-content: center;
        padding: 0;
        margin-right: 8px;
    }
`

const SaveButton: React.FC = () => {
  return (
    <div>SaveButton</div>
  )
}

export default SaveButton
import React from 'react'
import styled from 'styled-components'

const CreateButtonStyle = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    width: 202px;
    height: 40px;
    padding: 0px 17px;
    margin: 0px;
    margin-right: 16px;
    border: none;
    border-radius: 4px;
    color: #ffffff;
    background-color: #e46643;
    font-family: "Roboto";
    font-weight: 400;
    font-size: 15px;
    cursor: pointer;

    &:hover {
        background-color: #f39765;
    }
`


const CreateButton: React.FC = () => {
  return (
    <CreateButtonStyle>
        + New Document
    </CreateButtonStyle>
  )
}

export default CreateButton
import React, { useContext } from 'react'
import styled from 'styled-components'
import { DocumentContext } from '../../documents/DocumentContext'

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
    const { createDocument } = useContext(DocumentContext)

    return (
        <CreateButtonStyle onClick={() => createDocument()}>
            + New Document
        </CreateButtonStyle>
    )
}

export default CreateButton
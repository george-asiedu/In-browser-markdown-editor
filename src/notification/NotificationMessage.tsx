import React, { useEffect } from 'react'
import styled, { keyframes } from 'styled-components';

interface NotificationProps {
    message: string;
    onHide: () => void;
}

const slideIn = keyframes`
    from {
        margin-left: 100%;
        width: 300%;
    }

    to {
        margin-left: 0%;
        width: 100%;
    }
`

const NotificationMessageStyles = styled.div`
    width: 250px;
    display: block;
    margin: 0 auto;
    padding: 10px;
    text-align: center;
    font-weight: bold;
    background-color: #e46643;
    color: white;
    border-left: 3px solid #e46643;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    animation: ${slideIn} 0.5s ease-in-out;
`

const NotificationMessage: React.FC<NotificationProps> = ({ message, onHide }) => {
    useEffect(() => {
        const timeOutId = setTimeout(onHide, 3000)
        return () => clearTimeout(timeOutId)
    }, [onHide])
  return (
    <NotificationMessageStyles>
        {message}
    </NotificationMessageStyles>
  )
}

export default NotificationMessage
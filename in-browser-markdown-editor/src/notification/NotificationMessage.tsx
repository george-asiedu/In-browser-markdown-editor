import React, { useEffect } from 'react'
import styled from 'styled-components';

interface NotificationProps {
    message: string;
    onHide: () => void;
}

const NotificationMessageStyles = styled.div`
    width: 250px;
    display: block;
    margin: 0 auto;
    padding: 10px;
    text-align: center;
    font-weight: bold;
    background-color: #00A693;
    color: white;
    border-left: 2px solid green;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);`

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
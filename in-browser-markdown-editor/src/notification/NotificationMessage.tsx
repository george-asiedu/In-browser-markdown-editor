import React from 'react'
import styled from 'styled-components';
import { Theme } from '../themes/Themes';

interface NotificationProps {
    message: string;
}

const NotificationMessageStyles = styled.div<{ theme: Theme}>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 10px;
    text-align: center;
    background-color: ${({ theme}) => theme.background.main};
    color: ${({ theme }) => theme.color.h6}
`

const NotificationMessage: React.FC<NotificationProps> = ({ message}) => {
  return (
    <NotificationMessageStyles>
        {message}
    </NotificationMessageStyles>
  )
}

export default NotificationMessage
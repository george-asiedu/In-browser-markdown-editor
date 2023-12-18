import React from 'react'
import styled from 'styled-components'
import iconLightMode from '../../assets/icon-light-mode.svg'
import iconDarkMode from '../../assets/icon-dark-mode.svg'

const ThemeSelctor = styled.div`
    width: 104px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
`

const ThemeSelection: React.FC = () => {
  return (
    <div>ThemeSelection</div>
  )
}

export default ThemeSelection
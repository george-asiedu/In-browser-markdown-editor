import React, { ChangeEvent, useContext, useState } from 'react'
import styled from 'styled-components'
import iconLightMode from '../../assets/icon-light-mode.svg'
import iconDarkMode from '../../assets/icon-dark-mode.svg'

import { ThemeContext } from '../../themes/ThemeContext'

const ThemeSelctor = styled.div`
    width: 104px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
`

const DarkIcon = styled.img`
    width: 16.5px;
    height: 16px;
`

const SwitchLabel = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
`

const SliderStyles = styled.div`
    position: relative;
    width: 48px;
    height: 24px;
    background-color: #5a6069;
    border-radius: 24px;
    transition: 0.3s all;

    &:before {
        position: absolute;
        content: "";
        height: 12px;
        width: 12px;
        left: 6px;
        bottom: 6px;
        border-radius: 50%;
        background-color: white;
        transform: translateX(0);
        transition: 0.3s all;
    }
`

const CheckboxStyles = styled.input`
    position: absolute;
    opacity: 0;

    &:checked + ${Slider} {
        &:before {
            transform: translateX(24px);
        }
    }
`

const LightIcon = styled.img`
    width: 18px;
    height: 18px;
`

const ThemeSelection: React.FC = () => {
    const { handleInputChange } = useContext(ThemeContext)
    const [checked, setChecked] = useState(false)

    const handleCheckedChange = (event: ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
        handleThemeChange()
    }
    
    return (
        <div>ThemeSelection</div>
    )
}

export default ThemeSelection
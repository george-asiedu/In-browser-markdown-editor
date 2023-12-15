import React, { createContext, useEffect, useState } from 'react'
import { Theme, themes } from './Themes'

interface ThemeContextProps {
    theme: Theme;
    handleThemeChange: () => void
}

interface ThemeContextProviderProps {
    children: React.ReactNode
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: themes.light,
    handleThemeChange: () => {}
})

const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(
        JSON.parse(localStorage.getItem('theme')!) || themes.light
    )

    useEffect( () => {
        localStorage.setItem('theme', JSON.stringify(theme))
    }, [theme])

  return (
    <div>
        
    </div>
  )
}

export default ThemeContextProvider
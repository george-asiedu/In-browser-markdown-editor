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

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(
        JSON.parse(localStorage.getItem('theme')!) || themes.light
    )

    useEffect(() => {
        const currentTheme = JSON.parse(localStorage.getItem('theme')!)
        if(currentTheme) {
            setTheme(currentTheme)
        }
    }, [])

    useEffect( () => {
        localStorage.setItem('theme', JSON.stringify(theme))
    }, [theme])

    const handleThemeChange = () => {
        setTheme((prevTheme) => prevTheme.name === 'dark' ? themes.dark : themes.light)
    }

  return (
    <ThemeContext.Provider value={{theme, handleThemeChange}}>
        {children}
    </ThemeContext.Provider>
  )
}
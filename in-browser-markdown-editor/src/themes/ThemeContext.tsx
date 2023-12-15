import React, { createContext } from 'react'
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

const ThemeContextProvider: React.FC = () => {
  return (
    <div>
        
    </div>
  )
}

export default ThemeContextProvider
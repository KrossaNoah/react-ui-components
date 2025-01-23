import { useState } from "react";
import { ThemeContext } from "./Context";

type ThemeProviderProps = {
  children: React.ReactNode
}


export function ThemeProvider({children}: ThemeProviderProps) {

  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme')
    return storedTheme || 'light' // light is default theme
  })

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme) // Store user preference
  }

  return <ThemeContext.Provider value={{theme, toggleTheme}}>
    {children}
  </ThemeContext.Provider>
}

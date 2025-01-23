import { useContext } from "react"
import { ThemeContext } from "./Context" 
import {TbMoonFilled, TbSunFilled} from 'react-icons/tb'

export function ThemeToggle() {
  const {theme, toggleTheme} = useContext(ThemeContext)
  const icons = {
    dark: <TbMoonFilled />,
    light: <TbSunFilled />
  }
  return <div>

    <div className="switch" onClick={toggleTheme}>
      <span className={`switch__thumb switch__thumb--${theme==='dark'?`off`:'on'}`} >
        {icons[theme as keyof typeof icons]}
      </span>
    </div>
  </div>
}
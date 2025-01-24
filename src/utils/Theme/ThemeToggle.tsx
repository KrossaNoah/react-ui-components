import { useContext } from "react"
import { ThemeContext } from "./Context" 
import {TbMoonFilled, TbSunFilled} from 'react-icons/tb'

export function ThemeToggle() {
  const {theme, toggleTheme} = useContext(ThemeContext)
  const icons = {
    dark: <TbMoonFilled />,
    light: <TbSunFilled />
  }
  
  const switchState = theme === 'light' ? 'off' : 'on'

  return <div className="toggle-theme py-2 px-3 flx al-cntr">
    <div className="switch" onClick={toggleTheme}>
      <span className={`switch__thumb switch__thumb--${switchState}`} >
        {icons[theme as keyof typeof icons]}
      </span>
    </div>
    <span>appearance</span>
  </div>
}
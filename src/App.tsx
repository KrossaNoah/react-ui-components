import { useContext } from "react"
import { ThemeContext } from "./utils/Theme/Context"

function App() {
  const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <div className={`${theme}-mode`} id="app">
      <button
        onClick={() => toggleTheme()}
      >{theme}</button>
    </div>
  )
}

export default App
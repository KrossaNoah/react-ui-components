import { useContext } from "react"
import { ThemeContext } from "./utils/Theme/Context"
import { ThemeToggle } from "./utils/Theme/ThemeToggle"

function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`${theme}-mode`} id="app">
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, placeat?</h1>
      <ThemeToggle />
    </div>
  )
}

export default App
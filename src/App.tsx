import { useContext, useState } from "react"
import { ThemeContext } from "./utils/Theme/Context"
import { ThemeToggle } from "./utils/Theme/ThemeToggle"
import TextField from './common/TextField'
import { TbHomeFilled } from "react-icons/tb"

function App() {
  const {theme} = useContext(ThemeContext)
  const [value, setValue] = useState('')
  return (
    <div className={`flx flx-col al-cntr jf-cntr p-3 gap-5 ${theme}-mode`} id="app">
      <TextField  
        value={value} 
        onChange={setValue} 
        Icon={TbHomeFilled} 
        secret
      />
      <p>{value}</p>
      <ThemeToggle />
      <button className="button button--danger danger--themed ">
        Button
      </button>
    </div>
  )
}

export default App
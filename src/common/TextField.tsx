import { useState } from 'react'
import type {IconType} from 'react-icons'
import { TbEye, TbEyeClosed } from 'react-icons/tb'

type TextFieldProps = {
  value:string
  Icon?: IconType,
  onChange:(value:string) => void
  secret?: boolean
}


function TextField({Icon, value, onChange, secret}:TextFieldProps) {
  const [type, setType] = useState(() => secret ? 'password' : 'text')
  const toggleType = () => {
    setType(
      type === 'password' ? 'text' : 'password'
    )
  }

  return(
    <div className="text-field">
      { Icon && <span className='icon'> <Icon /></span> }
      <input 
        onChange={ (e) => { onChange(e.target.value) } } 
        value={ value } 
        className="text-field__input"  
        type={type}
      />
      {secret && 
        <span className='icon' onClick={toggleType}>
          {
            type === 'password' ? <TbEyeClosed /> : <TbEye />
          }
        </span>
      }
    </div>
  )
}
export default TextField
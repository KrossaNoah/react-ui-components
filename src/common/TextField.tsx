import type {IconType} from 'react-icons'

type TextFieldProps = {
  value:string
  Icon?: IconType,
  onChange:(value:string) => void
}

function TextField({Icon, value, onChange}:TextFieldProps) {
 
  return(
    <div className="text-field">
      {Icon && <Icon />}
      <input 
        onChange={ (e) => { onChange(e.target.value) } } 
        value={ value } 
        className="text-field__input"  
        type="text"
      />
    </div>
  )
}
export default TextField
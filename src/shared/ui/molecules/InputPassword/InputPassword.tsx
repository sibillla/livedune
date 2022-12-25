import {Input, InputProps} from 'shared/ui/atoms/Input/Input'
import {Icon} from 'shared/ui/atoms/Icon/Icon'
import EyeOpenIcon from 'shared/ui/assets/icons/eye-open.svg'
import EyeClosedIcon from 'shared/ui/assets/icons/eye-close.svg'
import {useState} from 'react'

export function InputPassword(props: InputProps) {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <Input
      type={showPassword ? 'text' : 'password'}
      iconRight={
        <Icon
          onClick={() => setShowPassword(!showPassword)}
          src={showPassword ? EyeOpenIcon : EyeClosedIcon}
        />
      }
      {...props}
    />
  )
}

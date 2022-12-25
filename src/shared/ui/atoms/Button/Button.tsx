import React, {ReactNode} from 'react'
import './button.scss'
import {Icon} from '../Icon/Icon'
import SpinnerIcon from 'shared/ui/assets/icons/spinner.svg'

export enum ButtonVariant {
  FILLED,
  OUTLINED,
  TEXT_ACCENT,
  TEXT_PLAIN
}
const variants = {
  [ButtonVariant.FILLED]: 'filled',
  [ButtonVariant.OUTLINED]: 'outlined',
  [ButtonVariant.TEXT_ACCENT]: 'text-accent',
  [ButtonVariant.TEXT_PLAIN]: 'text-plain'
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  leftIcon?: ReactNode
  variant?: ButtonVariant
  growWidth?: boolean
  loading?: boolean
}

export function Button(props: ButtonProps) {
  const {children, variant = ButtonVariant.FILLED, leftIcon, loading, ...rest} = props
  const className = variants[variant]
  return (
    <button className={className} {...rest}>
      <div className='button-content'>
        {leftIcon && leftIcon}
        {loading && <Icon className={'svg loading'} src={SpinnerIcon} />}
        {children}
      </div>
    </button>
  )
}

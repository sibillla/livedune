import './input.scss'
import React, {InputHTMLAttributes, ReactNode} from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: boolean
  hint?: string
  iconRight?: ReactNode
}

export function Input(props: InputProps) {
  const {label, hint, error, iconRight, ...rest} = props
  const wrapperClassName = `wrapper ${error ? 'error' : ''}`
  return (
    <label className={wrapperClassName}>
      {label && <span className={'label'}> {label}</span>}
      <span className='input-box'>
        {iconRight && iconRight}
        <input className={'input'} {...rest} />
      </span>
      {hint && <span className={'hint'}> {hint}</span>}
    </label>
  )
}

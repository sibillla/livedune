import React from 'react'
import './form.css'

export function Form(props: React.FormHTMLAttributes<HTMLFormElement>) {
  const {children, ...rest} = props
  return <form {...rest}>{children}</form>
}

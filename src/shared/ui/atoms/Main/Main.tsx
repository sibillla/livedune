import './main.css'
import {ReactNode} from 'react'

interface MainProps {
  children: ReactNode
  className?: string
}

export function Main({children, ...rest}: MainProps) {
  return <main {...rest}>{children}</main>
}

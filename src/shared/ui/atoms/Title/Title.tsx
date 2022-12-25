import {ReactNode} from 'react'
import './title.css'

export enum TitleSize {
  LARGE,
  MEDIUM,
  SMALL
}

interface TitleProps {
  children: ReactNode
  size?: TitleSize
}

export function Title(props: TitleProps) {
  const {children, size = TitleSize.LARGE} = props

  return (
    <>
      {size === TitleSize.LARGE && <h1>{children}</h1>}
      {size === TitleSize.MEDIUM && <h2>{children}</h2>}
      {size === TitleSize.SMALL && <h3>{children}</h3>}
    </>
  )
}

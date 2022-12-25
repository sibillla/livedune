import {ReactNode} from 'react'
import './text.scss'

export enum TextVariants {
  plain,
  bold
}

interface TextProps {
  children: ReactNode
  variant?: TextVariants
}

export function Text(props: TextProps) {
  const {children, variant = TextVariants.plain} = props
  const className = variant === TextVariants.plain ? 'plain' : 'bold'
  return <p className={className}>{children}</p>
}

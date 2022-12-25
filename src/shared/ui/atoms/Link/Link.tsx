import {Link as RouterLink} from 'react-router-dom'
import './link.css'
import React, {ReactNode} from 'react'

enum LinkAppearanceEnum {
  LINK,
  TEXT,
  BUTTON
}

interface LinkProps {
  to: string
  appearance?: LinkAppearanceEnum
  children: ReactNode
  className?: string
}

export function Link(
  props: LinkProps & React.RefAttributes<HTMLAnchorElement & LinkAppearanceEnum>
) {
  const {appearance = LinkAppearanceEnum.LINK, to, children, ...rest} = props
  const className = appearance === LinkAppearanceEnum.LINK ? 'link' : 'text'
  return (
    <RouterLink className={className} to={to} {...rest}>
      {children}
    </RouterLink>
  )
}

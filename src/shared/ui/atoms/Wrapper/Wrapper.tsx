import {ReactNode} from 'react'

export function Wrapper(props: {children: ReactNode; className?: string}) {
  const {children, ...rest} = props
  return <div {...rest}>{children}</div>
}

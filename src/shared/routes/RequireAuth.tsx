import {Navigate} from 'react-router-dom'
import {ReactNode} from 'react'
import {useSelector} from 'react-redux'
import {selectIsLogged} from 'feature/auth'

interface Props {
  children: ReactNode
  requireAuth: boolean
}

export function RequireAuth({children, requireAuth}: Props): JSX.Element {
  const isLogged = useSelector(selectIsLogged)

  if (!isLogged && requireAuth) {
    return (
      <Navigate
        to={{
          pathname: '/sign-in'
        }}
      />
    )
  }

  return <>{children}</>
}

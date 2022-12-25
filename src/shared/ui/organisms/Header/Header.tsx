import './header.scss'
import Logo from 'shared/ui/assets/icons/logo.svg'
import {Button, ButtonVariant} from 'shared/ui/atoms/Button/Button'
import {Icon} from 'shared/ui/atoms/Icon/Icon'
import {useMatch, useNavigate} from 'react-router'
import {Text} from 'shared/ui/atoms/Text/Text'
import {useDispatch, useSelector} from 'react-redux'
import {logout, selectIsLogged} from 'feature/auth'

export function Header() {
  const signUpPage = useMatch({path: 'sign-up'})
  const auth = useMatch({path: 'sign-in'})
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isLogged = useSelector(selectIsLogged)

  function handleLogout() {
    dispatch(logout())
  }

  function handleSignUpRedirect() {
    navigate('/sign-up')
  }

  return (
    <header>
      <div className='logo'>
        <Icon src={Logo} alt='Live Dune' />
      </div>
      <div className='actions'>
        {signUpPage && <Text>Уже есть аккаунт?</Text>}
        {signUpPage && (
          <Button
            variant={ButtonVariant.FILLED}
            onClick={() => {
              navigate('/sign-in')
            }}
          >
            Войти
          </Button>
        )}
        {auth && <Text>У вас нет аккаунта?</Text>}
        {auth && (
          <Button variant={ButtonVariant.FILLED} onClick={handleSignUpRedirect}>
            Регистрация
          </Button>
        )}
        {isLogged && (
          <Button variant={ButtonVariant.TEXT_PLAIN} onClick={handleLogout}>
            Выйти
          </Button>
        )}
      </div>
    </header>
  )
}

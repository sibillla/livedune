import {FormEvent, useEffect, useState} from 'react'
import {useNavigate} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import {Button} from 'shared/ui/atoms/Button/Button'
import {Main} from 'shared/ui/atoms/Main/Main'
import {Title, TitleSize} from 'shared/ui/atoms/Title/Title'
import {Text} from 'shared/ui/atoms/Text/Text'
import {Form} from 'shared/ui/atoms/form/Form'
import {Input} from 'shared/ui/atoms/Input/Input'
import {Link} from 'shared/ui/atoms/Link/Link'
import {login, selectIsError, selectIsLoading, selectIsLogged} from 'feature/auth'
import {InputPassword} from 'shared/ui/molecules/InputPassword/InputPassword'
import {SocialButtons} from 'shared/ui/molecules/SocialButtons/SocialButtons'
import {AppDispatch} from '../../index'

export function SignIn() {
  const [name, setName] = useState('')
  const isLogged = useSelector(selectIsLogged)
  const isLoading = useSelector(selectIsLoading)
  const isError = useSelector(selectIsError)
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    if (isLogged) {
      navigate('/')
    }
  }, [isLogged, navigate])

  useEffect(() => {
    if (isError) {
      setError(true)
    }
  }, [isError, navigate])

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email.length || !password.length) {
      setError(true)
    } else {
      dispatch(login({email, password}))
    }
  }

  return (
    <>
      <Main className='sign-up-content'>
        <Title size={TitleSize.LARGE}>Войти</Title>
        <Text>Добро пожаловать, рады видеть вас снова 👋</Text>
        <Form className='login-form' onSubmit={handleSubmit}>
          <SocialButtons />
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete='off'
            placeholder='Имя'
            name='name'
          />
          <Input
            value={email}
            autoComplete='off'
            placeholder='Email'
            error={error}
            name='email'
            onChange={(e) => {
              setError(false)
              setEmail(e.target.value)
            }}
          />
          <InputPassword
            error={error}
            hint={error ? (email.length ? 'Неверный еmail или пароль' : 'Введите данные') : ''}
            value={password}
            onChange={(e) => {
              setError(false)
              setPassword(e.target.value)
            }}
            autoComplete='off'
            placeholder='Пароль'
            name='password'
          />
          <Button loading={isLoading} type='submit'>
            Войти в аккаунт
          </Button>
          <Link to='/forget-password'>Забыли пароль?</Link>
        </Form>
      </Main>
    </>
  )
}

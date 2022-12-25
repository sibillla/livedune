import {useNavigate} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import {FormEvent, useEffect, useState} from 'react'
import {Form} from 'shared/ui/atoms/form/Form'
import {Input} from 'shared/ui/atoms/Input/Input'
import {Button, ButtonVariant} from 'shared/ui/atoms/Button/Button'
import {register, selectIsLogged} from 'feature/auth'
import {Title, TitleSize} from 'shared/ui/atoms/Title/Title'
import {Text, TextVariants} from 'shared/ui/atoms/Text/Text'
import {Link} from 'shared/ui/atoms/Link/Link'
import {InputPassword} from 'shared/ui/molecules/InputPassword/InputPassword'
import {SocialButtons} from 'shared/ui/molecules/SocialButtons/SocialButtons'
import {Wrapper} from 'shared/ui/atoms/Wrapper/Wrapper'
import './sign-up.scss'

export function SignUp() {
  const isLogged = useSelector(selectIsLogged)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [shownPromocode, setShownPromocode] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const emailRegex = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)

  useEffect(() => {
    if (isLogged) {
      navigate('/confirm-email')
    }
  }, [isLogged, navigate])

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email.length) {
      setError(true)
      return
    }

    if (email.match(emailRegex)) {
      dispatch(register())
    } else {
      setError(true)
    }
  }

  return (
    <>
      <Wrapper className='sign-up-content'>
        <Title size={TitleSize.LARGE}>Регистрация</Title>
        <Text>Зерегистрируйте и получи доступ к аналитике аккаунтов</Text>
        <Form className='login-form' onSubmit={handleSubmit}>
          <SocialButtons />
          <Input autoComplete='off' placeholder='Имя' name='name' />
          <Input
            value={email}
            onChange={(e) => {
              setError(false)
              setEmail(e.target.value)
            }}
            autoComplete='off'
            placeholder='Email'
            name='email'
            error={error}
            hint={
              error
                ? email.length
                  ? 'Возможно вы ошиблись в указании почтового сервиса'
                  : 'Введите email'
                : ''
            }
          />
          <InputPassword
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete='off'
            placeholder='Пароль'
            name='password'
          />
          {shownPromocode && <Input autoComplete='off' placeholder='Промокод' name='promocode' />}
          {!shownPromocode && (
            <Button
              type='button'
              onClick={() => setShownPromocode(true)}
              variant={ButtonVariant.TEXT_ACCENT}
            >
              У меня есть промокод
            </Button>
          )}

          <Button type='submit'>Создать аккаунт</Button>
          <Text variant={TextVariants.bold}>
            Создавая аккаунт, я согласен с <Link to='#'>условиями оферты</Link>
          </Text>
        </Form>
      </Wrapper>
    </>
  )
}

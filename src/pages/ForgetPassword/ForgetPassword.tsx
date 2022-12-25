import React, {useEffect, useState} from 'react'
import {Title} from 'shared/ui/atoms/Title/Title'
import {Text} from 'shared/ui/atoms/Text/Text'
import {Input} from 'shared/ui/atoms/Input/Input'
import {Button, ButtonVariant} from 'shared/ui/atoms/Button/Button'
import {Icon} from 'shared/ui/atoms/Icon/Icon'
import LockIcon from 'shared/ui/assets/icons/lock.svg'
import EmailIcon from 'shared/ui/assets/icons/email.svg'
import {Form} from 'shared/ui/atoms/form/Form'
import {Wrapper} from 'shared/ui/atoms/Wrapper/Wrapper'
import {useNavigate} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import {AppDispatch} from 'index'
import {recoverPassword, resetRecovery, selectRecoverState} from 'feature/recovery'
import './style.scss'

export function ForgetPassword() {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const [email, setEmail] = useState('')
  const [emailSent, setEmailSent] = useState(false)
  const [error, setError] = useState(false)
  const {isError, isLoading, isSuccess} = useSelector(selectRecoverState)

  useEffect(() => {
    setEmailSent(false)
    return () => {
      dispatch(resetRecovery())
    }
  }, [dispatch])

  useEffect(() => {
    if (isError) {
      setError(true)
    }
  }, [isError])

  useEffect(() => {
    setEmailSent(isSuccess)
  }, [isSuccess])

  function handleSentEmail(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    if (!email.length) {
      setError(true)
    } else {
      dispatch(recoverPassword(email))
    }
  }

  function handleRedirectToSigIn() {
    navigate('/sign-in')
  }

  function handleRedirectToHome() {
    navigate('/')
  }

  return (
    <>
      {!emailSent ? (
        <Wrapper className='forget-password-wrapper'>
          <Icon src={LockIcon} />
          <Title>Восстановить пароль</Title>
          <Form>
            <Text>Введите e-mail, на который регистрировались ранее</Text>
            <Input
              error={error}
              hint={error ? (email.length ? 'Неверный email' : 'Заполните email') : ''}
              placeholder={'Email'}
              value={email}
              onChange={(e) => {
                if (e.target.value.length) {
                  setError(false)
                }
                setEmail(e.target.value)
              }}
            />
            <Button type='submit' loading={isLoading} onClick={handleSentEmail}>
              Отправить
            </Button>
            <Button onClick={handleRedirectToSigIn} variant={ButtonVariant.TEXT_PLAIN}>
              Отменить
            </Button>
          </Form>
        </Wrapper>
      ) : (
        <Wrapper className='email-sent-wrapper'>
          <Icon src={EmailIcon} />
          <Title>Письмо отправлено</Title>
          <Text>
            На указанный вами e-mail было отправлено <br /> письмо для смены пароля
          </Text>
          <Button onClick={handleRedirectToHome}>Вернуться на главную</Button>
        </Wrapper>
      )}
    </>
  )
}

import {FormEvent} from 'react'
import {useNavigate} from 'react-router'
import {Button, ButtonVariant} from 'shared/ui/atoms/Button/Button'
import {Form} from 'shared/ui/atoms/form/Form'
import {Input} from 'shared/ui/atoms/Input/Input'
import {Title} from 'shared/ui/atoms/Title/Title'
import {Text} from 'shared/ui/atoms/Text/Text'
import {Wrapper} from 'shared/ui/atoms/Wrapper/Wrapper'
import './style.scss'

export function NoEmail() {
  const navigate = useNavigate()

  function cancelResendingEmail() {
    navigate('/confirm-email')
  }

  function handleSendEmail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <Wrapper className='no-email'>
      <Title>Мне не пришло письмо</Title>
      <Text>
        Письмо может прийти с задержкой в 5-10 минут.
        <br />
        Также проверьте разные папки почтового ящика (актуально для gmail.com) и папку <br />{' '}
        "Спам".Если письмо все же не пришло, повторите попытку или напишите об этом в тех.поддержку{' '}
        <span className='email'>support@livedune.ru </span> и мы активируем ваш аккаунт.
      </Text>
      <Form onSubmit={handleSendEmail}>
        <Input type='email' placeholder='Email' />
        <Button type='submit'>Отправить заново</Button>
        <Button type='button' onClick={cancelResendingEmail} variant={ButtonVariant.TEXT_PLAIN}>
          Отменить
        </Button>
      </Form>
    </Wrapper>
  )
}

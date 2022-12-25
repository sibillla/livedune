import {useNavigate} from 'react-router'
import {Title} from 'shared/ui/atoms/Title/Title'
import {Wrapper} from 'shared/ui/atoms/Wrapper/Wrapper'
import {Text} from 'shared/ui/atoms/Text/Text'
import {Button} from 'shared/ui/atoms/Button/Button'
import {Link} from 'shared/ui/atoms/Link/Link'
import './style.scss'

export function ConfirmEmail() {
  const navigate = useNavigate()

  function navigateToHome() {
    navigate('/')
  }

  return (
    <Wrapper className='confirm-email-content'>
      <Title>Подтвердите ваш e-mail </Title>
      <Text>
        Игорь, на ваш E-mail отправлено письмо со ссылкой для подтверждения. Перейдите по ней, чтобы
        активировать вашу учетную запись и получить 7 дней бесплатного доступа.
      </Text>
      <Button onClick={navigateToHome}>Перейти к главной странице</Button>
      <Link to='/no-email'>Мне не пришло письмо</Link>
    </Wrapper>
  )
}

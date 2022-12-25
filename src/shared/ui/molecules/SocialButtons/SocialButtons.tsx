import {Wrapper} from 'shared/ui/atoms/Wrapper/Wrapper'
import {Button, ButtonVariant} from 'shared/ui/atoms/Button/Button'
import FacebookIcon from 'shared/ui/assets/icons/facebook.svg'
import GoogleIcon from 'shared/ui/assets/icons/google.svg'
import {Text} from 'shared/ui/atoms/Text/Text'
import {Icon} from 'shared/ui/atoms/Icon/Icon'

export function SocialButtons() {
  return (
    <>
      <Wrapper className='login-by-social'>
        <Button
          type='button'
          variant={ButtonVariant.OUTLINED}
          leftIcon={<Icon className={'svg iconBox'} src={FacebookIcon} />}
        >
          Войти через Facebook
        </Button>{' '}
        <Button
          type='button'
          variant={ButtonVariant.OUTLINED}
          leftIcon={<Icon className={'svg iconBox'} src={GoogleIcon} />}
        >
          Войти через Google
        </Button>
      </Wrapper>
      <Text>или</Text>
    </>
  )
}

import {Title} from 'shared/ui/atoms/Title/Title'
import {Link} from 'shared/ui/atoms/Link/Link'

export function NotFoundPage() {
  return (
    <>
      <Title>404 Страница</Title>
      <Link to='/'>Перейти на главную</Link>
    </>
  )
}

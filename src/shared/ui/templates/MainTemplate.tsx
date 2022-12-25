import {Header} from '../organisms/Header/Header'
import {Main} from '../atoms/Main/Main'
import {ReactNode} from 'react'

interface MainTemplateProps {
  children: ReactNode
}

export function MainTemplate({children}: MainTemplateProps) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  )
}

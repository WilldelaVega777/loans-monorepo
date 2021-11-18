import { Fragment } from 'react'
import { SCTitle } from './styles'
import { ITitle } from './types'

const Title: React.FC<ITitle> = ({ children }: ITitle) => {
  return (
    <Fragment>
      <SCTitle>{children}</SCTitle>
    </Fragment>
  )
}

export default Title

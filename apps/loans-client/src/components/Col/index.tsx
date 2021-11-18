import { Fragment } from 'react'
import { SCCol } from './styles'
import { ICol } from './types'

const Col: React.FC<ICol> = ({ children, style, width }: ICol) => {
  return (
    <Fragment>
      <SCCol style={style} width={width}>{children}</SCCol>
    </Fragment>
  )
}

export default Col

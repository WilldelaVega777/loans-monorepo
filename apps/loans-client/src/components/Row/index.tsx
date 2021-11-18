import { Fragment } from 'react'
import { SCRow } from './styles'
import { IRow } from './types'

const Row: React.FC<IRow> = ({ children }: IRow) => {
  return (
    <Fragment>
      <SCRow>{children}</SCRow>
    </Fragment>
  )
}

export default Row

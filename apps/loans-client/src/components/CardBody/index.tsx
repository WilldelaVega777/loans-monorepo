import React from 'react'
import { SCCardBody } from './styles'
import { ICardBody } from './types'

const CardBody: React.FC<ICardBody> = ({ children }: ICardBody) => {
  return <SCCardBody>{children}</SCCardBody>
}

export default CardBody

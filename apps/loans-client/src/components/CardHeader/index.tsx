import React from 'react'
import { SCCardHeader } from './styles'
import { ICardHeader } from './types'

const CardHeader: React.FC<ICardHeader> = ({ children }: ICardHeader) => {
  return <SCCardHeader>{children}</SCCardHeader>
}

export default CardHeader

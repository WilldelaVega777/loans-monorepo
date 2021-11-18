import React from 'react'
import { SCCard } from './styles'
import { ICard } from './types'

const Card: React.FC<ICard> = ({ children }: ICard) => {
  return <SCCard>{children}</SCCard>
}

export default Card

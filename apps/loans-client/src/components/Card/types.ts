import { ReactElement } from 'react'
import { ICardBody } from '../CardBody/types'
import { ICardHeader } from '../CardHeader/types'

export interface ICard {
  children: [ReactElement<ICardHeader>, ReactElement<ICardBody>]
}

import { ICol } from 'components/Col/types'
import React from 'react'

export interface IRow {
  children: React.ReactElement<ICol> | Array<React.ReactElement<ICol>>
}

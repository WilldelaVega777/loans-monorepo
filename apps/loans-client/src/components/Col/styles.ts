import styled from 'styled-components'
import { ISCCol } from './types'

export const SCCol = styled.div<ISCCol>`
  display: flex;
  flex: 1;
  flex-basis: ${(props) =>
    props.width !== undefined ? `${String(props.width)}%` : 'auto'};
  flex-direction: column;
  margin: 0 15px;
  padding: 5px;
`

import { backgroundColor, color } from 'config/themes'
import styled from 'styled-components'

export const LayoutRoot = styled.div`
  color: #333;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: -85px;
  min-height: 100vh;
  width: 100%;
`

export const LayoutContent = styled.div`
  align-items: flex-start;
  background-color: ${backgroundColor};
  color: ${color};
  display: flex;
  flex: 1;
  flex-direction: column;
  height: auto;
  margin-top: 85px;
  padding: 15px;
  width: 100%;
`

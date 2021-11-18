import { borderColor } from 'config/themes'
import styled from 'styled-components'
import theme from 'styled-theming'

const backgroundColor = theme('mode', {
  light: '#FAFAFA',
  dark: '#252525'
})

export const SCCard = styled.div`
  background-color: ${backgroundColor};
  border: 1px solid ${borderColor};
  border-radius: 5px;
  color: #333;
  display: flex;
  flex-direction: column;
  font-family: 'Poppins', sans-serif;
  padding: 0;
`

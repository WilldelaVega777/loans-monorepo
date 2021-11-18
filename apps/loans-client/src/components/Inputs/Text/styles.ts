import { color, wvColors } from 'config/themes'
import styled from 'styled-components'
import theme from 'styled-theming'

const backgroundColor = theme('mode', {
  light: '#FAFAFA',
  dark: '#312e2e'
})

const backgroundColorFocus = theme('mode', {
  light: '#FAFAFA',
  dark: '#181818'
})

export const SCInputText = styled.input`
  background-color: ${backgroundColor};
  border: 1px solid #ccc;
  border-radius: 6px;
  color: ${color};
  display: inline-block;
  font-size: 1em;
  height: 15px;
  line-height: 1em;
  margin: 0;
  margin-top: 5px;
  padding: 8px 12px;
  position: relative;
  vertical-align: middle;
  width: 100%;

  :focus,
  :focus-visible {
    background-color: ${backgroundColorFocus};
    border: 0 none;
    color: ${color};
    outline-color: ${wvColors.blueDream};
  }
`

export const SCInputTextLabel = styled.label``

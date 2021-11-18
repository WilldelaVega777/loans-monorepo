import { color } from 'config/themes'
import styled from 'styled-components'
import theme from 'styled-theming'

export const switchToggleColor = theme('mode', {
  light: '#2196f3',
  dark: '#608687'
})

export const SCSwitchWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  z-index: 2;

  :hover {
    cursor: pointer;
  }
`
export const SCSwitchInputWrapper = styled.div`
  display: flex;
`

export const SCSwitch = styled.label`
  display: inline-block;
  height: 15px;
  position: relative;
  width: 30px;
`

export const SCSwitchInput = styled.input`
  height: 0;
  opacity: 0;
  width: 0;

  :checked + span {
    background-color: ${switchToggleColor};
  }

  :focus + span {
    box-shadow: 0 0 1px #2196f3;
  }

  :checked + span::before {
    transform: translateX(15px);
  }
`

export const SCSwitchToggle = styled.span`
  background-color: #ccc;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.4s;

  ::before {
    background-color: #fff;
    bottom: 1px;
    content: '';
    height: 13px;
    position: absolute;
    right: 16px;
    transition: 0.4s;
    width: 13px;
  }
`

export const SCSwitchText = styled.div`
  color: ${color};
  display: flex;
  font-size: 1em;
  margin-left: 5px;
  user-select: none;
`

import styled from 'styled-components'
import { ButtonStyleProps } from './types'

export const SCButton = styled.button<ButtonStyleProps>`
  align-items: center;
  border: 0;
  border-radius: 100px;
  display: flex;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  justify-content: flex-start;
  line-height: 11px;
  
  ${(props) => {
    switch (props.buttonColor) {
      case 'error':
        return `
        background-color: #ff0000;
        background-image: linear-gradient(90deg,#ff0000,#b34646);
        color: #FAFAFA;
        :hover {
            background-color: #7958BD;
            background-image: linear-gradient(90deg,#b34646,#ff0000);
            color: #FAFAFA;
        }
        `
      case 'primary':
        return `
        background-color: $#00ffaa;
        background-image: linear-gradient(90deg, #3b128d, #00affa);
        color: #FAFAFA;
        :hover {
            background-color: #7958BD;
            background-image: linear-gradient(90deg, rgba(0, 175, 250, 0.34), rgba(59, 18, 141, 0.23));
            color: #FAFAFA;
        }
        `
      case 'success':
        return `
        background-color: #05a905;
        background-image: linear-gradient(90deg, #05a905, #00FF00);
        color: #333;
        :hover {
            background-color: #00FF00;
            background-image: linear-gradient(90deg, #00FF00, #05a905);
            color: #333;
        }
        `
      case 'warning':
        return `
        background-color: #0000FF;
        color: #FAFAFA;
        `
    }
  }}

  padding: 10px 20px;
  text-align: center;
  text-size-adjust: 100%;
  transition: color 200ms ease, background-color 200ms ease;
  user-select: none;

  :hover {
    cursor: pointer;
  }
`

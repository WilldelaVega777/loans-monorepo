import React from 'react'
import { SCButton } from './styles'
import { IButton } from './types'

const Button: React.FC<IButton> = ({ children, color, onClick }: IButton) => {
  return (
    <SCButton buttonColor={color} onClick={onClick}>
      {children}
    </SCButton>
  )
}

export default Button

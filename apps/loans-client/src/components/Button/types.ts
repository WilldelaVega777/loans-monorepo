import React from 'react'

export type ButtonColors = 'primary' | 'success' | 'error' | 'warning'

export interface IButton {
  children: React.ReactChild | React.ReactChild[] | string
  color: ButtonColors
  onClick: () => void
}

export interface ButtonStyleProps {
  buttonColor: ButtonColors
}

import React from 'react'

export interface IAppContext {
  username: string | null
  theme: string
  setTheme: (value: string) => void
}

const defaultState = {
  username: null,
  theme: 'light',
  setTheme: (value: string) => {}
}

const AppContext = React.createContext<IAppContext>(defaultState)

export { AppContext }

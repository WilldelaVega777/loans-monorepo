import React, { lazy } from 'react'
import { Route, Switch } from 'react-router-dom'

// Lazy load pages
const PageButtons = lazy(async () => await import('pages/buttons'))
const PageCards = lazy(async () => await import('pages/cards'))
const PageGrid = lazy(async () => await import('pages/grid'))
const PageHome = lazy(async () => await import('pages/home'))
const PageInput = lazy(async () => await import('pages/input'))
const PageText = lazy(async () => await import('pages/text'))

const RoutesUnprotected: React.FC = () => {
  return (
    <Switch>
      <Route path='/buttons'>
        <PageButtons />
      </Route>
      <Route path='/cards'>
        <PageCards />
      </Route>
      <Route path='/grid'>
        <PageGrid />
      </Route>
      <Route path='/input'>
        <PageInput />
      </Route>
      <Route path='/text'>
        <PageText />
      </Route>
      <Route path='/'>
        <PageHome />
      </Route>
    </Switch>
  )
}

export { RoutesUnprotected }

import { lazy } from 'react'

// Lazy Load
const PageButtons = lazy(async () => await import('./buttons'))
const PageCards = lazy(async () => await import('./cards'))
const PageGrid = lazy(async () => await import('./grid'))
const PageHome = lazy(async () => await import('./home'))
const PageInput = lazy(async () => await import('./input'))
const PageText = lazy(async () => await import('./text'))

export { PageButtons, PageCards, PageGrid, PageHome, PageInput, PageText }

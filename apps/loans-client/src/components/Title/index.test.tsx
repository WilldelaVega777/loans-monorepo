import { render, screen } from '@testing-library/react'
import { Title } from 'components'

test('renders component - title', () => {
  render(<Title>Hello World - Title!</Title>)
  const element = screen.getByText(/Hello World - Title!/i)
  expect(element).toBeInTheDocument()
})

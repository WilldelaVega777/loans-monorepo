import { render, screen } from '@testing-library/react'
import CardHeader from './'

test('renders card header', () => {
  render(<CardHeader>Sample Card Header</CardHeader>)
  const element = screen.getByText(/Sample Card Header/i)
  expect(element).toBeInTheDocument()
})

import { render, screen } from '@testing-library/react'
import CardBody from './'

test('renders card body', () => {
  render(<CardBody>Sample Card Body</CardBody>)
  const element = screen.getByText(/Sample Card Body/i)
  expect(element).toBeInTheDocument()
})

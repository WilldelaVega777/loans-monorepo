import { render, screen } from '@testing-library/react'
import Card from './'
import CardBody from '../CardBody'
import CardHeader from '../CardHeader'

test('renders card', () => {
  render(
    <Card>
      <CardHeader>Sample Card Header</CardHeader>
      <CardBody>Sample Card Body</CardBody>
    </Card>
  )
  const element = screen.getByText(/Sample Card Body/i)
  expect(element).toBeInTheDocument()
})

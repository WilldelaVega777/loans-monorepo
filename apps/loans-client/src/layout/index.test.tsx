import { render } from '@testing-library/react'
import Layout from '.'

test('renders - layout', () => {
  render(<Layout />)
  expect(true).toEqual(true)
})

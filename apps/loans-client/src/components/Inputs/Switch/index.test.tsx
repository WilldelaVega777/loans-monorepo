import { render, screen } from '@testing-library/react'
import { InputSwitch } from 'components'

test('renders component - switch', () => {
  render(
    <InputSwitch
      defaultValue={false}
      offText='Switch Is Off!'
      onChange={() => {}}
      onText='Switch Is On!'
    />
  )
  const element = screen.getByText(/Switch Is Off!/i)
  expect(element).toBeInTheDocument()
})

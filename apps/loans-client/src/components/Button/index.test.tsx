import { render, screen } from '@testing-library/react'
import { configure, shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { Button } from 'components'

configure({ adapter: new Adapter() })

test('Button : Renders', () => {
  render(
    <Button color='primary' onClick={() => {}}>
      Sample Button
    </Button>
  )
  const element = screen.getByText(/Sample Button/i)
  expect(element).toBeInTheDocument()
})

test('Button: onClick Function Works', () => {
  const mockFn = jest.fn()
  const tree = shallow(
    <Button color='primary' onClick={mockFn}>
      Sample Button
    </Button>
  )
  tree.simulate('click')
  expect(mockFn).toHaveBeenCalled()
})

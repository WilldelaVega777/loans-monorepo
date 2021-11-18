import { Fragment, lazy } from 'react'

// Lazy Load
const Button = lazy(async () => await import('components/Button'))
const Title = lazy(async () => await import('components/Title'))

const PageButtons: React.FC = () => {
  return (
    <Fragment>
      <Title>Hello World - Buttons!</Title>
      <Button
        color='primary'
        onClick={() => {
          window.alert('Primary Button clicked!')
        }}
      >
        Sample Button!
      </Button>
      <br />
      <Button
        color={'error'}
        onClick={() => {
          window.alert('Error Button clicked!')
        }}
      >
        Sample Error Button!
      </Button>
      <br />
      <Button
        color={'success'}
        onClick={() => {
          window.alert('Error Success clicked!')
        }}
      >
        Sample Success Button!
      </Button>
      <br />
      <Button
        color={'warning'}
        onClick={() => {
          window.alert('Error Warning clicked!')
        }}
      >
        Sample Warning Button!
      </Button>
    </Fragment>
  )
}

export default PageButtons

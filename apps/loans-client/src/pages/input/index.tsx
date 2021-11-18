import { Fragment, lazy } from 'react'

// Lazy Load
const Col = lazy(async () => await import('components/Col'))
const InputSwitch = lazy(async () => await import('components/Inputs/Switch'))
const InputText = lazy(async () => await import('components/Inputs/Text'))
const Row = lazy(async () => await import('components/Row'))
const Title = lazy(async () => await import('components/Title'))

const PageInput: React.FC = () => {
  return (
    <Fragment>
      <Title>Hello World! - Inputs!</Title>
      <Row>
        <Col>
          <InputText label='This is a text input' />
          <br />
          <InputText label='This is another text input' />
          <br />
          <InputText label='This is yet another text input' />
        </Col>
        <Col>
          <label>This is a switch input</label>
          <InputSwitch
            defaultValue={true}
            offText='Switch Is Off'
            onChange={() => {}}
            onText='Switch Is On'
          />
        </Col>
      </Row>
    </Fragment>
  )
}

export default PageInput

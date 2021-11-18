import { Fragment, lazy } from 'react'

// Lazy Load
const Card = lazy(async () => await import('components/Card'))
const CardBody = lazy(async () => await import('components/CardBody'))
const CardHeader = lazy(async () => await import('components/CardHeader'))
const Title = lazy(async () => await import('components/Title'))

const PageCards: React.FC = () => {
  return (
    <Fragment>
      <Title>Hello World - Cards!</Title>
      <Card>
        <CardHeader>
          <Fragment>Card Header Text!</Fragment>
        </CardHeader>
        <CardBody>Card Body Text!</CardBody>
      </Card>
    </Fragment>
  )
}

export default PageCards

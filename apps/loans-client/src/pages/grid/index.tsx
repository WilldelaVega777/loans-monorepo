import { Fragment, lazy } from 'react'

// Lazy Load
const Col = lazy(async () => await import('components/Col'))
const Row = lazy(async () => await import('components/Row'))
const Title = lazy(async () => await import('components/Title'))

const PageGrid: React.FC = () => {
  const colBorder = {
    border: '1px dashed #888'
  }
  return (
    <Fragment>
      <Title>Hello World! - Grid</Title>
      <p>
        This page highlights the &ldquo;Row&rdquo; and &ldquo;Col&rdquo;
        components, which are essentially div elements, using &ldquo;flex&rdquo;
        CSS to layout.
      </p>
      <Row>
        <Col style={colBorder}>1 Column</Col>
      </Row>
      <br />
      <Row>
        <Col style={colBorder}>1 Column</Col>
        <Col style={colBorder}>2 Column</Col>
      </Row>
      <br />
      <Row>
        <Col style={colBorder}>1 Column</Col>
        <Col style={colBorder}>2 Column</Col>
        <Col style={colBorder}>3 Column</Col>
      </Row>
      <br />
      <Row>
        <Col style={colBorder}>1 Column</Col>
        <Col style={colBorder}>2 Column</Col>
        <Col style={colBorder}>3 Column</Col>
        <Col style={colBorder}>4 Column</Col>
      </Row>
      <br />
      <Row>
        <Col style={colBorder}>1 Column</Col>
        <Col style={colBorder}>2 Column</Col>
        <Col style={colBorder}>3 Column</Col>
        <Col style={colBorder}>4 Column</Col>
        <Col style={colBorder}>5 Column</Col>
      </Row>
      <br />
      <Row>
        <Col style={colBorder} width={70}>
          70% Column
        </Col>
        <Col style={colBorder} width={30}>
          30% Column
        </Col>
      </Row>
      <br />
      <Row>
        <Col style={colBorder} width={10}>
          10% Column
        </Col>
        <Col style={colBorder} width={30}>
          30% Column
        </Col>
        <Col style={colBorder} width={20}>
          20% Column
        </Col>
        <Col style={colBorder}>Flex Column</Col>
      </Row>
    </Fragment>
  )
}

export default PageGrid

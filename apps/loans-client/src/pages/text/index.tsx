import { Fragment, lazy } from 'react'

// Lazy Load
const Title = lazy(async () => await import('components/Title'))

const PageText: React.FC = () => {
  return (
    <Fragment>
      <Title>This is the &lt;Title/&gt; global component</Title>
      <h1>This is a standard h1</h1>
      <h2>This is a standard h2</h2>
      <h3>This is a standard h3</h3>
      <h4>This is a standard h4</h4>
      <h5>This is a standard h5</h5>
      <p>This is a standard paragraph of text.</p>
      <br />
      <strong>This is standard strong text.</strong>
    </Fragment>
  )
}

export default PageText

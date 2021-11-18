import { Fragment, lazy } from 'react'

// Lazy Load
const Title = lazy(async () => await import('../../components/Title'))

const PageHome: React.FC = () => {
  return (
    <Fragment>
      <Title>Hello World - Home!</Title>
      <p>
        This is an example browser web application running on{' '}
        <a href='https://reactjs.org/' rel='noreferrer' target='_blank'>
          ReactJS version 17
        </a>{' '}
        with{' '}
        <a
          href='https://www.typescriptlang.org/'
          rel='noreferrer'
          target='_blank'
        >
          TypeScript
        </a>{' '}
        and{' '}
        <a
          href='https://styled-components.com/'
          rel='noreferrer'
          target='_blank'
        >
          styled-components
        </a>
        .
      </p>
    </Fragment>
  )
}

export default PageHome

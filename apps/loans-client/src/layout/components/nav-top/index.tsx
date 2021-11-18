import React, { Fragment, useContext } from 'react'
import { AppContext, IAppContext, cdnURL } from 'config'
import { InputSwitch } from 'components'
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
// Local Styled Components
import {
  NavTopBar,
  NavTopLeft,
  NavTopLeftBrand,
  NavTopMiddle,
  NavTopMiddleLink,
  NavTopRight,
  NavTopWrapper
} from './styles'

const NavTop: React.FC = () => {
  const { theme, setTheme } = useContext<IAppContext>(AppContext)
  return (
    <Fragment>
      <NavTopBar>
        <strong>Did you know?</strong>&nbsp;Our Top Bar Content Here!
      </NavTopBar>
      <NavTopWrapper>
        <NavTopLeft>
          <NavTopLeftBrand
            alt='WV Logo'
            src={
              theme === 'light'
                ? `${cdnURL}/wv-logos/color.svg`
                : `${cdnURL}/wv-logos/white.svg`
            }
          />
        </NavTopLeft>
        <NavTopMiddle>
          <NavTopMiddleLink to='/'>Home</NavTopMiddleLink>
          <NavTopMiddleLink to='/buttons'>Buttons</NavTopMiddleLink>
          <NavTopMiddleLink to='/cards'>Cards</NavTopMiddleLink>
          <NavTopMiddleLink to='/grid'>Grid</NavTopMiddleLink>
          <NavTopMiddleLink to='/input'>Input</NavTopMiddleLink>
          <NavTopMiddleLink to='/text'>Text</NavTopMiddleLink>
        </NavTopMiddle>
        <NavTopRight>
          <InputSwitch
            defaultValue={theme === 'light'}
            offText={
              <Fragment>
                <FontAwesomeIcon icon={faMoon} />
                &nbsp;Dark Mode
              </Fragment>
            }
            onChange={() => {
              switch (theme) {
                case 'light':
                  setTheme('dark')
                  break
                case 'dark':
                  setTheme('light')
                  break
                default:
                  setTheme('light')
              }
            }}
            onText={
              <Fragment>
                <FontAwesomeIcon icon={faSun} />
                &nbsp;Light Mode
              </Fragment>
            }
          />
        </NavTopRight>
      </NavTopWrapper>
    </Fragment>
  )
}

export default NavTop

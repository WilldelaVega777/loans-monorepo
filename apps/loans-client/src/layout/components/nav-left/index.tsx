import { Fragment } from 'react'
import {
  NavLeftBackgroundImage,
  NavLeftBackgroundImageWrapper,
  NavLeftLink,
  NavLeftLinkWrapper,
  NavLeftWrapper
} from './styles'

const NavLeft: React.FC = () => {
  return (
    <Fragment>
      <NavLeftWrapper>
        <NavLeftLinkWrapper>
          <NavLeftLink to='/'>Home</NavLeftLink>
          <NavLeftLink to='/buttons'>Buttons</NavLeftLink>
          <NavLeftLink to='/cards'>Cards</NavLeftLink>
          <NavLeftLink to='/grid'>Grid</NavLeftLink>
          <NavLeftLink to='/input'>Input</NavLeftLink>
          <NavLeftLink to='/text'>Text</NavLeftLink>
        </NavLeftLinkWrapper>
        <NavLeftBackgroundImageWrapper>
          <NavLeftBackgroundImage
            alt='WV Brand'
            src='https://assets.website-files.com/6079c2e8783403b45058cce5/6090c6a59c410575aca11340_wv-leaf.svg'
          />
        </NavLeftBackgroundImageWrapper>
      </NavLeftWrapper>
    </Fragment>
  )
}

export default NavLeft

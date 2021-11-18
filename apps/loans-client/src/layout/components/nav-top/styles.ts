import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
  backgroundColor,
  borderColor,
  color,
  menuBackgroundImage
} from 'config/themes'
import theme from 'styled-theming'

export const navTopBackgroundColor = theme('mode', {
  light: '#FAFAFA',
  dark: '#181818'
})

export const navTopBarColor = theme('mode', {
  light: '#FAFAFA',
  dark: '#FAFAFA'
})

export const NavTopBar = styled.div`
  align-items: center;
  background-color: ${backgroundColor};
  background-image: ${menuBackgroundImage};
  border-bottom: 1px solid ${borderColor};
  color: ${navTopBarColor};
  display: flex;
  font-family: 'Poppins', sans-serif;
  font-size: 0.9em;
  height: 25px;
  justify-content: center;
  width: 100%;
  z-index: 3;
`

export const NavTopWrapper = styled.div`
  align-items: center;
  background-color: ${navTopBackgroundColor};
  border-bottom: 1px solid ${borderColor};
  display: flex;
  flex-direction: row;
  height: 55px;
  width: 100%;
  z-index: 2;
`
export const NavTopLeft = styled.div`
  border-right: 1px solid ${borderColor};
  box-shadow: 1px 1px 15px 0 rgba(0, 0, 0, 0.5);
  display: flex;
  height: 55px;
  min-width: 250px;
  width: 250px;
  @media (max-width: 768px) {
    border-right: 0 none;
    box-shadow: none;
  }
`
export const NavTopLeftBrand = styled.img`
  margin-left: 15px;
  user-select: none;
  width: 150px;

  :hover {
    cursor: pointer;
  }
`
export const NavTopMiddle = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin-left: 25px;
  margin-right: 15px;
  @media (max-width: 768px) {
    display: none;
  }
`
export const NavTopMiddleLink = styled(Link)`
  color: ${color};
  display: flex;
  font-size: 1em;
  font-weight: 700;
  margin-right: 15px;
  text-decoration: none;
  text-size-adjust: 100%;
  user-select: none;

  :hover {
    cursor: pointer;
  }
`
export const NavTopRight = styled.div`
  color: ${color};
  display: flex;
  justify-content: flex-end;
  margin-right: 15px;
  @media (max-width: 768px) {
    flex: 1;
  }
`

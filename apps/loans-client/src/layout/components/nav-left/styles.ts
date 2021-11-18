import { menuBackgroundImage } from 'config/themes'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NavLeftWrapper = styled.div`
  background-color: #fafafa;
  background-image: ${menuBackgroundImage};
  box-shadow: 0 0 12px -3px rgb(0 0 0 / 51%);
  display: flex;
  flex-direction: column;
  width: 250px;
  z-index: 1;
  @media (max-width: 768px) {
    display: none;
  }
`
export const NavLeftLinkWrapper = styled.div`
  align-items: center;
  margin-top: 85px;
  z-index: 9;
`

export const NavLeftLink = styled(Link)`
  align-items: center;
  background-color: transparent;
  color: #fafafa;
  display: flex;
  font-family: 'Poppins', sans-serif;
  font-size: 1.1em;
  font-weight: 500;
  height: 50px;
  padding: 0 15px;
  text-decoration: none;
  user-select: none;
  width: 220px;

  :hover {
    background-color: hsla(0, 0%, 100%, 0.19);
    color: #00affa;
  }
`

export const NavLeftBackgroundImageWrapper = styled.div`
  bottom: 0;
  height: 100%;
  left: 0;
  opacity: 1;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
  transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
  width: 250px;
  z-index: 0;
`

export const NavLeftBackgroundImage = styled.img`
  height: 50%;
  opacity: 0.03;
  position: absolute;
  top: 25%;
`

import theme from 'styled-theming'

export const wvColors = {
  purpleHaze: '#440099',
  blueDream: '#00b5e2'
}

export const backgroundColor = theme('mode', {
  light: '#ecf2f9',
  dark: '#181818'
})

export const borderColor = theme('mode', {
  light: '#ececec',
  dark: '#323232'
})

export const linkColor = theme('mode', {
  light: wvColors.blueDream,
  dark: '#FAFAFA'
})

export const color = theme('mode', {
  light: '#333',
  dark: '#FAFAFA'
})

export const menuBackgroundImage = theme('mode', {
  light:
    'linear-gradient(rgba(0,0,0,0.24),rgba(0,0,0,0.24)),linear-gradient(118deg,rgb(59,18,141),rgb(0,175,250))',
  dark: 'linear-gradient(rgba(0,0,0,0.24),rgba(0,0,0,0.24)),linear-gradient(118deg,rgb(24 24 24),rgb(80 75 75))'
})

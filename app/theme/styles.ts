import { colors, Colors } from './colors'

interface StyleObject {
  [key: string]: string
}

interface ITheme {
  colors: Colors
  light: StyleObject
  dark: StyleObject
}

export const theme: ITheme = {
  light: {
    backgroundColor: '#fff',
    color: '#000',
    textColor: colors.textLight,
  },
  dark: {
    backgroundColor: '#222',
    color: '#fff',
    textColor: colors.textDark,
  },
  colors: {
    ...colors,
  },
}

import { colors } from './colors'

interface StyleObject {
  [key: string]: string
}

interface ITheme {
  colors: StyleObject
  light: StyleObject
  dark: StyleObject
}

export const theme: ITheme = {
  light: {
    backgroundColor: '#fff',
    color: '#000',
    textColor: 'green',
  },
  dark: {
    backgroundColor: '#222',
    color: '#fff',
    textColor: 'gray',
  },
  colors: {
    ...colors,
  },
}

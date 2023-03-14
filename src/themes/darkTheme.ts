import { type Theme, createTheme } from '@mui/material';
import { type DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export const darkTheme: DefaultTheme = createTheme({
  palette: {
    primary: {
      light: '#00a335',
      main: '#007938',
      dark: '#005023',
    },

    secondary: {
      light: '#50788A',
      main: '#21495A',
      dark: '#002630',
    },

    error: {
      light: '#E57373',
      main: '#F44336',
      dark: '#D32F2F',
    },
    warning: {
      light: '#FFB74D',
      main: '#FFA726',
      dark: '#F57C00',
    },
    info: {
      light: '#00A8D5',
      main: '#005B79',
      dark: '#0084A9',
    },
    success: {
      light: '#388E3C',
      main: '#388E3C',
      dark: '#388E3C',
    },
    common: {
      white: '#F4EDE8',
      black: '#000000',
    },
    background: {
      default: '#BBCAD2',
    },
  },
});

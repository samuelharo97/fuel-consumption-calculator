import { Theme, createTheme } from '@mui/material';
import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export const lightTheme: DefaultTheme = createTheme({
  palette: {
    primary: {
      light: '#87c984',
      main: '#00A335',
      dark: '#00863F'
    },

    secondary: {
      light: '#6990A7',
      main: '#50788A',
      dark: '#31586C'
    },

    error: {
      light: '#E57373',
      main: '#F44336',
      dark: '#D32F2F'
    },
    warning: {
      light: '#FFB74D',
      main: '#FFA726',
      dark: '#F57C00'
    },
    info: {
      light: '#87d0d1',
      main: '#27bdbe',
      dark: '#00A8D5'
    },
    success: {
      light: '#81C784',
      main: '#66BB6A',
      dark: '#388E3C'
    },
    common: {
      white: '#D7DBDD',
      black: '#495057'
    }
  },
  transitions: {}
});

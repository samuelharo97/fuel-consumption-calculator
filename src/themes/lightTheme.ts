import { createTheme } from '@mui/material/styles';
import type { DefaultTheme } from 'styled-components';
import { Theme } from '@mui/material/styles';

declare module '@mui/system' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

export const lightTheme: DefaultTheme = createTheme({
  palette: {
    primary: {
      light: '#abd5a2',
      main: '#00A335',
      dark: '#00863F',
    },

    secondary: {
      light: '#6990A7',
      main: '#50788A',
      dark: '#31586C',
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
      light: '#87d0d1',
      main: '#27bdbe',
      dark: '#00A8D5',
    },
    success: {
      light: '#81C784',
      main: '#66BB6A',
      dark: '#388E3C',
    },
    common: {
      white: '#D7DBDD',
      black: '#495057',
    },
  },
  typography: {
    fontFamily: 'Nunito Sans, sans-serif',
  },
  transitions: {},
});

import { Theme } from '@mui/material/styles';

declare module '@mui/system' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

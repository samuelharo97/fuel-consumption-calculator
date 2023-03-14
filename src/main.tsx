import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import App from './App';
import { GlobalTheme, lightTheme } from './themes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <GlobalTheme theme={lightTheme} />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);

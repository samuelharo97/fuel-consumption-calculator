import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@mui/material';
import { GlobalTheme, darkTheme, lightTheme } from './themes';

ReactDOM.render(
  <React.Fragment>
    <ThemeProvider theme={darkTheme}>
      <GlobalTheme />
      <App />
    </ThemeProvider>
  </React.Fragment>,
  document.getElementById('root')
);

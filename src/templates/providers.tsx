import React from 'react';
import { ThemeProvider } from '@mui/material';
import { GlobalTheme, lightTheme } from '../themes';
import { BrowserRouter } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
};

export const CommonProviders = ({ children }: Props) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={lightTheme}>
        <GlobalTheme theme={lightTheme} />
        {children}
      </ThemeProvider>
    </BrowserRouter>
  );
};

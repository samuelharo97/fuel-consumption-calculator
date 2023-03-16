import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { CommonProviders } from './templates/providers';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CommonProviders>
      <App />
    </CommonProviders>
  </React.StrictMode>,
);

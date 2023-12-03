import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { FallbackAppError } from './components/FallbackError';
import { App } from './components';
import './index.css';
import { DriverProvider } from './contexts';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary
      fallbackRender={FallbackAppError}
      onReset={(details) => console.log('onReset', details)}
    >
      <QueryClientProvider client={queryClient}>
        <DriverProvider>
          <App />
        </DriverProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

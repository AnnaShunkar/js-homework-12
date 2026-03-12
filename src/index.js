import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, BrowserRouter as Router } from 'react-router';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from './store/store'
import { Provider } from 'react-redux'

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
    </QueryClientProvider>
    </Provider>

);


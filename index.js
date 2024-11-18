import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/App.js';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </BrowserRouter>
);

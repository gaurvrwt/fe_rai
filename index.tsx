
import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './src/App';
import { BrowserRouter } from 'react-router-dom';

// Clear the existing HTML content
document.body.innerHTML = '<div id="root"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('root')!);
root.render(<BrowserRouter> <App /> </BrowserRouter>);
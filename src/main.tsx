import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './reset.css';
import App from './App';
import { UserContext } from './contexts/UserContext';

const user = { name: 'PyCoding', age: 30 };

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element #root was not found.');
}

createRoot(rootElement).render(
  <UserContext.Provider value={user}>
    <StrictMode>
      <App />
    </StrictMode>
  </UserContext.Provider>,
);

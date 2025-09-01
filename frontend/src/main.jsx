import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from './components/ui/sonner.jsx';

createRoot(document.getElementById('root')).render(
      <BrowserRouter>
            <App />
            <Toaster position="bottom-right"  />
      </BrowserRouter>
);
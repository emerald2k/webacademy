import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.jsx'
// import App from './Products.jsx';
// import App from './Article.jsx';
// import App from './Lessons.jsx';
// import App from './Profile.jsx';
// import App from './FileExplorer.jsx';
import App from './Settings.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

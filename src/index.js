import ReactDOM from 'react-dom/client';
import { FiltersProvider } from './context/filters.jsx';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
);


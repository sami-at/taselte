// App.jsx
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Import your i18n configuration
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';

import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="App">
        <Navbar />
        {/* Other components and routes can be added here */}
      </div>
    </I18nextProvider>
  );
}

export default App;

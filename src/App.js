import logo from './logo.svg';
import './App.css';

import { Outlet } from 'react-router-dom';
import Menu from './components/header/menu';
import { useState } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  return (
    <div>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Menu />

        <Outlet />
      </ThemeContext.Provider>
    </div>


  );
}

export default App;

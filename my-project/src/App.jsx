import './App.css'
import { AsteroidsPage } from './pages/AsteroidsPage'
import { DestroymentPage } from './pages/DestroymentPage'
import { AsteroidPage } from './pages/AsteroidPage'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { createContext, useState } from 'react';

export const AppContext = createContext(null);

function App() {
  const [asteroids, setAsteroids] = useState([]);
  const [destroyList, setDestroyList] = useState([]);

  return (
    <AppContext.Provider value={{ asteroids, setAsteroids, destroyList, setDestroyList }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AsteroidsPage />} />
          <Route path="/destroyment" element={<DestroymentPage />} />
          <Route path="asteroids/:id" element={<AsteroidPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
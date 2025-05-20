import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import { useState } from 'react';

const root = createRoot(document.getElementById('root'));
let setPage;

function AppWithNav() {
  const [page, _setPage] = useState('home');
  setPage = _setPage;
  return (
    <>
      <App page={page} setPage={_setPage} />
    </>
  );
}

root.render(
  <StrictMode>
    <AppWithNav />
  </StrictMode>
)

createRoot(document.getElementById('nav')).render(
  <StrictMode>
    <Navbar onNavigate={p => setPage && setPage(p)} />
  </StrictMode>,
)



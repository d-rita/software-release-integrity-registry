import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './components/App.tsx';

const root = document.getElementById("root");

createRoot(root!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="about" element={<div>About Page</div>} />

    </Routes>
  </BrowserRouter>,
)

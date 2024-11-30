import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import MainRouter from './main-router'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <MainRouter/>
  </BrowserRouter>
)

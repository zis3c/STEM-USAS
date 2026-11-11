import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import NotFound from './features/landing/components/NotFound'
import './styles/index.css'

const path = window.location.pathname
const Component = path === '/' ? App : NotFound

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Component />
  </StrictMode>
)

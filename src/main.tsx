import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import NotFound from './features/landing/components/NotFound'
import './styles/index.css'

const path = window.location.pathname
const isKnownPath = path === '/' || path === '/stemcraft' || path.startsWith('/stemcraft')
const Component = isKnownPath ? App : NotFound

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Component />
  </StrictMode>
)

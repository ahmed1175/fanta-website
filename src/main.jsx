import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MouseFollower from 'react-svg-mouse-follower'
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <MouseFollower/>
    <App />
  </StrictMode>,
)

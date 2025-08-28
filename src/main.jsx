import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { AuthProvider } from './../frontend/src/context/AuthContext.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
)

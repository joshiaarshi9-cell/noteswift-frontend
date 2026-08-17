import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { EmployeeProvider } from "./context/EmployeeContext";


createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <EmployeeProvider>
      <BrowserRouter>
        <StrictMode>
          <Toaster position="top-right" />
          <App />
        </StrictMode>
      </BrowserRouter>
    </EmployeeProvider>
  </AuthProvider>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ExtractProvider } from '@core/contexts/Extract.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ExtractProvider>
      <App />
    </ExtractProvider>
  </React.StrictMode>,
)

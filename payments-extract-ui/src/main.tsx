import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ExtractProvider } from '@core/contexts/Extract.tsx'
import { CssBaseline } from '@mui/material'
import ColorModeProvider from '@core/contexts/Color.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ExtractProvider>
      <ColorModeProvider>
        <CssBaseline />
        <App testMode={false}/>
      </ColorModeProvider>
    </ExtractProvider>
  </React.StrictMode>,
)

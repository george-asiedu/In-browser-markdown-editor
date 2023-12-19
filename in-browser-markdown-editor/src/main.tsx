import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeContextProvider } from './themes/ThemeContext.tsx'
import DocumentContextWrapper from './documents/DocumentContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <DocumentContextWrapper>
        <App />
      </DocumentContextWrapper>
    </ThemeContextProvider>
  </React.StrictMode>,
)
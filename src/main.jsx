import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './styles/globals'
import {App} from './App'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
    <App/>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { GlobalStyles } from './styles/global'
import { TableOrder } from './components/Table'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path:"/order",
    element:<TableOrder/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles/>
    <RouterProvider router={router}/>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { GlobalStyles } from './styles/global'
import { Order } from './pages/Order'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path:"/order",
    element:<Order/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles/>
    <RouterProvider router={router}/>
  </StrictMode>,
)

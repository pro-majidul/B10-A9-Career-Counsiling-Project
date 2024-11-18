import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes.jsx'
import Provider from './provider/Provider.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider>
   <RouterProvider router={Routes} />
   </Provider>
  </StrictMode>,
)

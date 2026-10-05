import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from  './App.jsx'
import Displaystories from "./Displaystories.jsx"
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>
  },
  {
    path : "/Displaystories/:id",
    element : <Displaystories/>
  }
]);

createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router}/>
  
)

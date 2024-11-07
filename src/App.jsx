import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import NavbarWithStyling from './components/navbar/navbarWithStyling' 
import Button from './components/elements/button/ButtonClick'

import HomeView from './page/HomeView'
import AboutView from './page/AboutView'
import NotFoundView from './page/NotFoundView'
import { LoginPage } from './page/Login'
import { RegisterPage } from './page/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeView />
  },
  {
    path: '/about',
    element: <AboutView />
  },
  {
    path: '/not-found',
    element: <NotFoundView />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  }
])

function App() {
  const [count, setCount] = useState(10)

  return (
    <RouterProvider router={router} />
  )
}

export default App

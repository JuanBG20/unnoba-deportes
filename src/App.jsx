import './App.css'
import { lazy, useEffect, useState } from 'react'

import { BASE, NOVEDADES, INSCRIPCION, LOGIN } from './Components/constants'

const Navbar = lazy(() => import('./Components/Navbar'))
const Main = lazy(() => import('./Components/Main'))
const Footer = lazy(() => import('./Components/Footer'))
const Form = lazy(() => import('./Components/Form'))
const Login = lazy(() => import('./Components/Login'))
const Novedades = lazy(() => import('./Components/Novedades'))

function App() {
  const [path, setPath] = useState('/')

  useEffect(() => setPath(window.location.pathname), [])

  const pageSelector = () => {
    switch (path) {
      case BASE: {
        return (
          <>
            <Navbar />
            <Main />
            <Footer />
          </>
        )
      }

      case NOVEDADES: {
        return (
          <>
            <Navbar />
            <Novedades />
            <Footer />
          </>
        )
      }

      case INSCRIPCION: {
        return (
          <>
            <Navbar />
            <Form />
            <Footer />
          </>
        )
      }

      case LOGIN: {
        return <Login />
      }

      default: {
        return 'Página no encontrada'
      }
    }
  }

  return <>{pageSelector()}</>
}

export default App

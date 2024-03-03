import './App.css'
import { lazy, useEffect, useState } from 'react'

const Navbar = lazy(() => import('./Components/Navbar'))
const Main = lazy(() => import('./Components/Main'))
const Footer = lazy(() => import('./Components/Footer'))
const Form = lazy(() => import('./Components/Form'))
const Login = lazy(() => import('./Components/Login'))
const Novedades = lazy(() => import('./Components/Novedades'))

function App() {
  const [path, setPath] = useState('/unnoba-deportes')

  useEffect(() => setPath(window.location.pathname), [])

  const pageSelector = () => {
    switch (path) {
      case '/unnoba-deportes': {
        return (
          <>
            <Navbar />
            <Main />
            <Footer />
          </>
        )
      }

      case '/unnoba-deportes/novedades': {
        return (
          <>
            <Navbar />
            <Novedades />
            <Footer />
          </>
        )
      }

      case '/unnoba-deportes/inscripcion': {
        return (
          <>
            <Navbar />
            <Form />
            <Footer />
          </>
        )
      }

      case '/unnoba-deportes/login': {
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

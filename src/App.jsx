import './App.css'
import { useEffect, useState } from 'react'

import { BASE, NOVEDADES, INSCRIPCION, LOGIN } from './Components/constants'

import Navbar from './Components/Navbar'
import Main from './Components/Main'
import Footer from './Components/Footer'
import Form from './Components/Form'
import Login from './Components/Login'
import Novedades from './Components/Novedades'

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

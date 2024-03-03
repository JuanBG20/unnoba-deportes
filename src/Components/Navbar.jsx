import './Navbar.css'
import { LoginIcon, LogoutIcon, MenuIcon, XLargeIcon } from './Icons'
import { useEffect, useState } from 'react'
import { BASE, INSCRIPCION, LOGIN, NOVEDADES } from './constants'

export default function Navbar() {
  const [path, setPath] = useState(BASE)
  const [navbarActive, setNavbarActive] = useState(false)

  const name = localStorage.getItem('name')

  const handleClick = () => {
    localStorage.removeItem('name')
    localStorage.removeItem('email')

    window.location.reload()
  }

  useEffect(() => setPath(window.location.pathname), [])

  useEffect(() => {
    if (navbarActive) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [navbarActive])

  const activeLink = (link) => {
    if (path === BASE && link === 'inicio') return 'disabled'
    if (path === NOVEDADES && link === 'novedades') return 'disabled'
    if (path === INSCRIPCION && link === 'inscripcion') return 'disabled'
  }

  return (
    <>
      <header>
        <div className="navDiv">
          <a href={BASE}>
            <h1>UNNOBA Deportes</h1>
          </a>

          <div className="loginLogic">
            {name !== null ? (
              <div className="logout">
                <p>Bienvenido {name}</p>
                <button className="logoutButton" onClick={handleClick}>
                  Cerrar sesión <LogoutIcon />
                </button>
              </div>
            ) : (
              <a href={LOGIN}>
                <button className="loginButton">
                  Iniciar sesión <LoginIcon />
                </button>
              </a>
            )}
          </div>

          <button
            className="collapseMenu"
            onClick={() => setNavbarActive(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </header>
      <nav className={navbarActive ? 'openCollapseMenu' : 'closeNavbar'}>
        <button
          className={navbarActive ? 'closeCollapseMenu' : 'closeButton'}
          onClick={() => setNavbarActive(false)}
        >
          <XLargeIcon />
        </button>
        <ul>
          <li
            className={
              navbarActive && name !== null ? 'welcome' : 'closeButton'
            }
          >
            Bienvenido {name}
          </li>
          <li>
            <a href={BASE} className={activeLink('inicio')}>
              Inicio
            </a>
          </li>
          <li>
            <a href={NOVEDADES} className={activeLink('novedades')}>
              Novedades
            </a>
          </li>
          <li>
            <a href={INSCRIPCION} className={activeLink('inscripcion')}>
              Inscripción
            </a>
          </li>
          <li>
            {name !== null ? (
              <button className="logoutNavButton" onClick={handleClick}>
                Cerrar sesión
              </button>
            ) : (
              <a href={LOGIN}>Iniciar sesión</a>
            )}
          </li>
        </ul>
      </nav>
    </>
  )
}

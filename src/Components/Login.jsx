import './Login.css'
import { useState } from 'react'
import { users } from '../mocks/users.json'
import { AlertIcon, LoginIcon } from './Icons'
import { BASE } from './constants'

export default function Login() {
  const [user, setUser] = useState({ name: '', email: '', password: '' })

  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name

    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    users.find((dbUser) => {
      if (dbUser.email === user.email) {
        if (dbUser.password === user.password) {
          localStorage.setItem('name', dbUser.name)
          localStorage.setItem('email', dbUser.email)
          window.location.pathname = BASE
        }
      }
    })
  }

  return (
    <div className="formContainer">
      <div className="formLogin">
        <h1>Iniciar sesión</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Correo electrónico: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Contraseña: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />

          <div className="formButtonsDiv">
            <a href={BASE}>
              <button className="cancel" type="button">
                Cancelar <AlertIcon />
              </button>
            </a>
            <button type="submit">
              Ingresar <LoginIcon />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

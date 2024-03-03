import './Form.css'
import { useState } from 'react'
import FormModal from './FormModal'

export default function Form() {
  const [newInscription, setNewInscription] = useState(
    localStorage.getItem('name') !== null
      ? {
          name: localStorage.getItem('name'),
          dni: '',
          email: localStorage.getItem('email'),
          phone: '',
          sport: 'Basquetbol'
        }
      : {
          name: '',
          dni: '',
          email: '',
          phone: '',
          sport: 'Basquetbol'
        }
  )
  const [modal, setModal] = useState(false)

  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name

    setNewInscription({ ...newInscription, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setModal(true)
  }

  return (
    <>
      <div className={modal ? 'd-none' : 'form'}>
        <h1>¡Inscríbete!</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">* Nombre completo: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={newInscription.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="dni">* DNI: </label>
          <input
            type="text"
            id="dni"
            name="dni"
            value={newInscription.dni}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">* Correo electrónico: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={newInscription.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="phone">Número de teléfono: </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={newInscription.phone}
            onChange={handleChange}
          />
          <label htmlFor="sport">* Deporte: </label>
          <select
            name="sport"
            id="sport"
            value={newInscription.sport}
            onChange={handleChange}
            required
          >
            <option value="Basquetbol">Basquetbol</option>
            <option value="Fútbol 11">Fútbol 11</option>
            <option value="Handball">Handball</option>
            <option value="Hockey">Hockey</option>
            <option value="Futsal">Futsal</option>
            <option value="Natación">Natación</option>
          </select>
          <button type="submit">Enviar</button>
        </form>
      </div>
      {modal && <FormModal newInscription={newInscription} />}
    </>
  )
}

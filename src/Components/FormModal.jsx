import './FormModal.css'
import { CloseIcon } from './Icons'
import { BASE } from './constants'

export default function FormModal({ newInscription }) {
  return (
    <div className="formModal">
      <a href={BASE}>
        <CloseIcon />
      </a>

      <h2>Formulario enviado con éxito</h2>
      <h3>Los datos enviados fueron los siguientes: </h3>

      <div className="formModalInfo">
        <p>
          <strong>Nombre:</strong> {newInscription.name}
        </p>
        <p>
          <strong>DNI:</strong> {newInscription.dni}
        </p>
        <p>
          <strong>Correo electrónico:</strong> {newInscription.email}
        </p>
        <p>
          <strong>Número de teléfono:</strong>{' '}
          {newInscription.phone === '' ? 'No definido' : newInscription.phone}
        </p>
        <p>
          <strong>Deporte:</strong> {newInscription.sport}
        </p>
      </div>
    </div>
  )
}

import './Footer.css'
import { FacebookIcon, InstagramIcon, XIcon } from './Icons'

export default function Footer() {
  return (
    <footer>
      <div className="descripcion">
        <h4>LA UNNOBA, TU UNIVERSIDAD PÚBLICA Y GRATUITA</h4>

        <p>
          La
          <strong>
            {' '}
            Universidad Nacional del Noroeste de la Provincia de Buenos Aires
            (UNNOBA)
          </strong>
          fue creada el 16 de diciembre de 2002. Tiene sede en las ciudades de
          <strong> Junín y Pergamino</strong>. La universidad es
          <strong> pública y gratuita</strong>, está orientada a la formación de
          científicos, profesionales, docentes y técnicos, capaces de dar
          respuesta a las problemáticas locales, regionales y nacionales.
        </p>
      </div>

      <div className="contacto">
        <div className="seccionContacto">
          <h5>SEDES</h5>

          <div>
            <h6>JUNÍN</h6>
            <p>Roque Saenz Peña 456</p>
          </div>

          <div>
            <h6>PERGAMINO</h6>
            <p>Monteagudo 2772</p>
          </div>
        </div>

        <div className="seccionContacto">
          <h5>TELÉFONOS</h5>

          <div>
            <h6>JUNÍN</h6>
            <p>(0236) 4407750</p>
          </div>

          <div>
            <h6>PERGAMINO</h6>
            <p>(02477) 409500</p>
          </div>
        </div>

        <div className="seccionContactoRedes">
          <h5>SEGUINOS</h5>

          <div>
            <a
              href="https://www.instagram.com/rector_unnoba/?hl=es"
              target="_blank"
            >
              <InstagramIcon />
            </a>
            <a href="https://www.facebook.com/RectorUNNOBA/" target="_blank">
              <FacebookIcon />
            </a>
            <a
              href="https://twitter.com/RectorUNNOBA?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              target="_blank"
            >
              <XIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

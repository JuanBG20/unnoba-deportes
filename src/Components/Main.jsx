import './Main.css'
import SectionCard from './SectionCard'
import imgNovedades from '../assets/novedades.webp'
import imgInscripcion from '../assets/inscripcion.webp'

export default function Main() {
  return (
    <main>
      <SectionCard
        title="¡Novedades!"
        link="/unnoba-deportes/novedades"
        button="Ve las novedades"
        img={imgNovedades}
        imgAlt="Imagen alusiva a 'Novedades'"
      >
        Descubre las últimas noticias en nuestro blog.
      </SectionCard>
      <SectionCard
        title="Inscripciones"
        link="/unnoba-deportes/inscripcion"
        button="¡Inscríbete!"
        img={imgInscripcion}
        imgAlt="Imagen alusiva a 'Inscripciones'"
      >
        Conoce todos los deportes que ofrecemos e inscribete al que más te
        guste.
      </SectionCard>
    </main>
  )
}

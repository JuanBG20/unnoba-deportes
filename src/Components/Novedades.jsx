import './Novedades.css'

export default function Novedades() {
  return (
    <main className="mainNovedades">
      <section>
        <h2>Deportes</h2>
        <p>
          El Deporte dentro de la Universidad cuenta con dos parámetros
          diferentes, el deportivo y el recreativo, ambos dirigidos a toda la
          comunidad universitaria, y tiene entre sus objetivos que dicha
          comunidad pueda practicar diversas actividades, las cuales tienen una
          finalidad lúdica, formativa y competitiva.
        </p>
      </section>

      <section>
        <h2>¿Qué deportes ofrecemos?</h2>
        <p>Podés anotarte en las siguientes actividades: </p>
        <ul>
          <li>Basquetbol</li>
          <li>Voleibol</li>
          <li>Fútbol 11</li>
          <li>Handball</li>
          <li>Hockey</li>
          <li>Futsal</li>
          <li>Natación</li>
        </ul>
      </section>

      <section>
        <h2>Gimnasios</h2>
        <p>
          Como estudiante de la UNNOBA, tenés acceso a descuentos en los
          siguientes establecimientos.
        </p>
        <ul>
          <li>Flex</li>
          <li>Wellness</li>
          <li>Energym</li>
        </ul>
      </section>

      <section>
        <h2>¿Te quedaste con dudas?</h2>
        <p>
          Contactanos a través de nuestras redes o mediante el siguiente correo
          electrónico:{' '}
          <a href="mailto:deportes@unnoba.edu.ar">deportes@unnoba.edu.ar</a>
        </p>
      </section>
    </main>
  )
}

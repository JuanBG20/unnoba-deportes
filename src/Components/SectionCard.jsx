import { LinkIcon } from './Icons'

export default function SectionCart({
  children,
  title,
  link,
  button,
  img,
  imgAlt
}) {
  return (
    <section className="seccion">
      <div className="seccionInfo">
        <div>
          <h2>{title}</h2>
          <p>{children}</p>
        </div>

        <a href={link}>
          <button>
            {button} <LinkIcon />
          </button>
        </a>
      </div>

      <img src={img} alt={imgAlt} />
    </section>
  )
}

import './Project.css'

export interface ProjectProps {
  name: string
  image: string
  description: string
  technologies: readonly string[]
  url?: string
}

function Project({ name, image, description, technologies, url }: ProjectProps) {
  return (
    <article className="project">
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="project__image-link"
          tabIndex={-1}
          aria-hidden="true"
        >
          <img className="project__image" src={image} alt={`${name} preview`} />
        </a>
      ) : (
        <img className="project__image" src={image} alt={`${name} preview`} />
      )}

      <div className="project__content">
        <h3 className="project__name">
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="project__link"
            >
              <span>{name}</span>
              <svg
                className="project__link-icon"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          ) : (
            name
          )}
        </h3>
        <p className="project__description">{description}</p>

        <ul className="project__technologies" aria-label="Technologies used">
          {technologies.map((technology) => (
            <li className="project__technology" key={technology}>
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default Project

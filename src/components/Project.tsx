import './Project.css'

export interface ProjectProps {
  name: string
  image: string
  description: string
  technologies: readonly string[]
}

function Project({ name, image, description, technologies }: ProjectProps) {
  return (
    <article className="project">
      <img className="project__image" src={image} alt={`${name} preview`} />

      <div className="project__content">
        <h2 className="project__name">{name}</h2>
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

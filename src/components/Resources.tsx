import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'

function Resources() {
  return (
    <section id="resources">
      <div id="docs">
        <svg className="icon" role="presentation" aria-hidden="true">
          <use href="/icons.svg#documentation-icon"></use>
        </svg>
        <h2>Vite & React Documentation</h2>
        <p>This website is made with Vite and React</p>
        <ul>
          <li>
            <a href="https://vite.dev/" target="_blank">
              <img className="logo" src={viteLogo} alt="" />
              Explore Vite
            </a>
          </li>
          <li>
            <a href="https://react.dev/" target="_blank">
              <img className="button-icon" src={reactLogo} alt="" />
              Learn more
            </a>
          </li>
        </ul>
      </div>
      <div id="social">
        <svg className="icon" role="presentation" aria-hidden="true">
          <use href="/icons.svg#social-icon"></use>
        </svg>
        <h2>Connect with Me</h2>
        <p>Links to my socials</p>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/ping-chang-ueng/" target="_blank">
              <svg
                className="button-icon"
                role="presentation"
                aria-hidden="true"
              >
                <use href="/icons.svg#linkedin-icon"></use>
              </svg>
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/pingu543" target="_blank">
              <svg
                className="button-icon"
                role="presentation"
                aria-hidden="true"
              >
                <use href="/icons.svg#github-icon"></use>
              </svg>
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Resources

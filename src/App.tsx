import Header from './components/Header'
import Resources from './components/Resources'
import Project from './components/Project'
import { projects } from './data/projects'
import './App.css'

function App() {
  return (
    <>
      {/* <div className="ticks"></div> */}

      <Header />

      {/* <div className="ticks"></div> */}

      <section id="projects" aria-labelledby="projects-title">
        <div className="projects-header">
          <h2 id="projects-title" className="projects-title">
            My Projects
          </h2>
        </div>
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </section>

      {/* <div className="ticks"></div> */}

      <Resources />

      {/* <div className="ticks"></div> */}

      <footer id="spacer">
        <p>© {new Date().getFullYear()} Ping Ueng. All rights reserved.</p>
      </footer>

      {/* <div className="ticks"></div> */}
    </>
  )
}

export default App

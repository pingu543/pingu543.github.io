import ClickCounter from './ClickCounter'
import Hero from './Hero'

function Header() {
  return (
    <header id="top-bar">
      <Hero />
      <div>
        {/* <h1>Get started</h1> */}
        <h1>Ping Ueng</h1>
        <p>
          {/* Edit <code>src/App.tsx</code> and save to test <code>HMR</code> */}
          Software Engineer | Full Stack Developer
        </p>
      </div>
      <ClickCounter />
    </header>
  )
}

export default Header

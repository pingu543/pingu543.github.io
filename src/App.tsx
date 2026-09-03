import Header from './components/Header'
import Resources from './components/Resources'
import './App.css'

function App() {
  return (
    <>
      <Header />

      <section id="center"></section>

      <div className="ticks"></div>

      <Resources />

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App

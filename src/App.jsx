import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import HomeImage from '../public/home-image.svg'



function App() {
  return (
    <>
      <Header />
      <section className='container'>
        <div>
          <p>
            Olá, sou <br />
            <span>Daniel Lima</span> <br />
            Dev Front-end
          </p>
          <button className='btn btn-home'>
            Saiba mais
          </button>
        </div>

        <figure>
          <img className='img-home' src={HomeImage} alt='Home image' />
        </figure>
      </section>
      <Footer />
    </>
  )
}

export default App

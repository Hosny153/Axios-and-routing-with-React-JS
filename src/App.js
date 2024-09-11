import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import {Route,Routes} from 'react-router-dom'

import Home from './Components/Home'
import Products from './Components/Products'


export default function App() {
  return (
  <>
      <div className='container-fluid p-0'>
        <Navbar />
      </div>

      <section className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />

          <Route path='/Products' element={<Products />} />
        </Routes>
      </section>
      
      <footer>
        <Footer />
      </footer>
    </>
  )
}


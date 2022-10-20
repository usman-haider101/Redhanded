import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navebar from './Components/Navebar'
import Welcome from './Components/Welcome'
import Advantages from './Components/Advantages'
import Working from './Components/Working'
import Footer from './Components/Footer';
import Testimonial from './Components/Testimonial';
import Spaces from './Components/Spaces';
const App = () => {
  return (
    <div className='container-fluid p-0'>
      <section>
        <Navebar />
      </section>
      <section>
        <Welcome />
      </section>
      <section>
        <Advantages />
      </section>
      <section>
        <Working />
      </section>
      <div className="container-fluid spaces">
        <Spaces />
      </div>
      <section className='container-fluid testimonial'>
        <Testimonial />
      </section>
      <section>
        <Footer />
      </section>

    </div>
  )
}

export default App

import React from 'react'
import Testimonial from './Testimonial'
import Collaboration from './Collaboration'
import Profession from './Profession'
import Hero from './Hero'
import About from './About'
import Choose from './Choose'

function Landing() {
  return (
    <div className='w-full'>
        <Hero/>
        <About/>
        <Choose/>
        <Profession/>
        <Collaboration/>
        <Testimonial/>
    </div>
  )
}

export default Landing
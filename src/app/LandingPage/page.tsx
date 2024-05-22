import React from 'react'
import Testimonial from './Testimonial'
import Collaboration from './Collaboration'
import Profession from './Profession'
import Hero from './Hero'
import About from './About'

function Landing() {
  return (
    <div>
        <Hero/>
        <About/>
        <Profession/>
        <Collaboration/>
        <Testimonial/>
    </div>
  )
}

export default Landing
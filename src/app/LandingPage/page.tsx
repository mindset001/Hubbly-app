import React from 'react'
import Testimonial from './Testimonial'
import Collaboration from './Collaboration'
import Profession from './Profession'
import Hero from './Hero'

function Landing() {
  return (
    <div>
        <Hero/>
        <Profession/>
        <Collaboration/>
        <Testimonial/>
    </div>
  )
}

export default Landing
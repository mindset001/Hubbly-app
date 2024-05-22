import React from 'react'
import Testimonial from './Testimonial'
import Collaboration from './Collaboration'
import Profession from './Profession'
import About from './About'
import Choose from './Choose'
import Screen from './Screen'
import Offerings from './Offerings'
import Download from './Download'
import NewHero from './NewHero'

function Landing() {
  return (
    <div className='w-full'>
        <NewHero/>
        <div id='about'>
        <About/>
        </div>
        <div id='choose'>
        <Choose/>
        </div>
        <Download/>
        <div id='how-we-work'>
        <Profession/>
        </div>
        <div id='offerings'>
        <Offerings/>
        </div>
        <Screen/>
        <Collaboration/>
        <Testimonial/>
    </div>
  )
}

export default Landing
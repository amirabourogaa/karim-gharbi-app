import React from 'react'
import Header from '../components/header/Header'
import Biography from '../components/biography/Biography'
import Timeline from '../components/timeline/Timeline'
import Footer from '../components/footer/Footer'

export default function About() {
  return (
    <div>
        <Header page='Parcours' path="/about"/>
        <Biography/>
        <Timeline/>
        <Footer/>
    </div>
  )
}

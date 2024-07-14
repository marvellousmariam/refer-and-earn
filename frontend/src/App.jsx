import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import ReferStep from './components/ReferStep'
import ReferBenefit from './components/ReferBenefit'
import Fqa from './components/Fqa'
import PopForm from './components/PopForm'

function App() {

  return (
   <div className='overflow-hidden'>
    <Header/>
    <Hero/>
    <ReferStep/>
    <ReferBenefit/>
    <Fqa/>
    <PopForm/>
   </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "../src/components/Header.jsx"
import Hero from "../src/components/Hero.jsx"
import Profile from './components/profile.jsx'
import Salaar_header from './components/Salaar_header.jsx'
import Salaar_hero from './components/Salaar_hero.jsx'
import Salaar_profile from './components/Salaar_profile.jsx'



//props-data that parent passes to child component
//Task()-is just a function
//props=function arguements
//jsx ues{} to show dynamic values


function App() {
  

  return (
   <>
    <Header/>
     <Hero />
     <Profile/>
     <Salaar_header/>
     <Salaar_hero/>
     <Salaar_profile/>
  </>
  )
}

export default App

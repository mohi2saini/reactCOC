import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj={
    username:"mohit",
    age:22
  }
  let newArr=[1,2,3]
  return (
    <>
      <h1 className='bg-green-400 rounded'>Tailwind test hello mohit</h1>
      <br />
      
      <Card username="chai or code " someObj={newArr} btnText="click me "/> 
      <Card username="alexa" btnText="fuck me "/>
      <Card/>
      
    </>
  )
} 

export default App

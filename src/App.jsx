import { useState } from 'react'
import './App.css'
import Currency from './componenets/Currency'
import Abbreviations from './componenets/Abbreviations'


function App() {
  
  

  return (
    <>
      
      <Currency />
      <div className="abbreviations-div">
        <Abbreviations />
      </div>
    </>
  )
}

export default App

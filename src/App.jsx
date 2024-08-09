import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'

// Fuction bhitra  kehi html ko code xa bhane teslai Component bhaninxa
function App() {
  const name ="Adit"

  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path= '/' element={<h1> THis is home page...</h1>} /> */}
      {/* <Route path='/about' element= {<h1>THis  is about page</h1>} /> */}
      {/* <Route path='/contact' element= {<h1>This is contact page.</h1>} /> */}
      <Route path= '/Email' element= {<h2>This is just the beginning...</h2>} />
      <Route path= '/Home' element={<Home/>} />
      <Route path='/about' element={<About/>} />
    </Routes>
    </BrowserRouter>
    // <div>
    //   <h1> Hello {name}</h1>
    //   <h2>Hi Don {1+2}</h2>
    //   <h1>Bye World</h1>
    // </div>
      
  )
}

export default App

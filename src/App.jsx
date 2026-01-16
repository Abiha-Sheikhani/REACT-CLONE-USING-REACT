import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import Second from './components/secondSec'
import Third from './components/Third'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Navbar/>
 <Hero/>
 <Second/>
 <Third/>

    </>
  )
}

export default App

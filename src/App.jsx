import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import Second from './components/secondSec'
import Third from './components/Third'
import Fourth from './components/Fourth'
import Fifth from './components/Fifth'
import Sixth from './components/Sixth'
import Seven from './components/seven'
import Eight from './components/eight'
import Footer from './components/footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Navbar/>
 <Hero/>
 <Second/>
 <Third/>
 <Fourth/>
 <Fifth/>
 <Sixth/>
 <Seven/>
 <Eight/>
<Footer/>
    </>
  )
}

export default App

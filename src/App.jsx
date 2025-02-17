

import './App.css'

import About from './components/About.jsx'
import Home from './components/Home.jsx'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="header">
        <div className="logo">
          <Link to="/home">#VANLIFE</Link>
        </div>
        <div className="nav">
          <Link to="/about">About</Link>
          <Link>Vans</Link>
        </div>
      </div>
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer>
        <p>&copy; 2021 #VANLIFE</p>
      </footer>
    </BrowserRouter>
  </div>
  )

}


export default App

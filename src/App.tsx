import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Home />
      </div>
    </BrowserRouter>
  )
}
export default App

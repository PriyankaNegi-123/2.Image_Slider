import React from 'react'
import Slide from './components/Slide'
import './index.css'

const App = () => {
  return (
    <main>
      <div className="container">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
          <Slide/>
        </div>
      </div>
    </main>
  )
}

export default App
import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './Home'


function App() {
  return (
    <div className='App'>
      <Router>
        <Home/>
        <Routes>
          <Route path ='/Home' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App

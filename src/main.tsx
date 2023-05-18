import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './page/Home'
import { TvShowDetails } from './page/TvShowDetails'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/details' element={<TvShowDetails />}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

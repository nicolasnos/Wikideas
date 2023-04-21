import React from 'react'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { Home } from "./Home";
import { Team } from "./Team";
import { Functions } from "./Functions";

export const Navigation = () => {
  return (
    <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Team' element={<Team/>} />
          <Route path='/Functions' element={<Functions/>} />
        </Routes>
    </BrowserRouter>
  )
}

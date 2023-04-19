import React from 'react'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { Home } from "./Home";

export const Navigation = () => {
  return (
    <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
    </BrowserRouter>
  )
}

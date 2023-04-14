import { useState } from 'react'


import { Routes,Route } from 'react-router-dom'
import Home from './component/list'
import Addproduct from './component/add'
import Updateproduct from './component/update'

function App(){


  return (

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<Addproduct/>}/>
      <Route path='/update/:id' element={<Updateproduct/>}/>
    </Routes>
    
  )
}

export default App

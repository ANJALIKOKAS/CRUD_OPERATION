import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Form from './componets/Form'
import Home from './componets/Home'
import Update from './componets/Update'

const App = () => {
  const [formData, setFormData] = useState([])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home formData={formData} setFormData={setFormData}/>}/>
          <Route path='/add' exact element={<Form formData={formData} setFormData={setFormData}/>}/>
          <Route path='/edit' exact element={<Update formData={formData} setFormData={setFormData}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

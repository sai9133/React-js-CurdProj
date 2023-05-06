
import React from 'react'
import Homecrud from './component/Homecrud'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CreateUser from './component/CreateUser'
import User from './component/User'
import Edituser from './component/Edituser'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Homecrud/>
      <Routes>
        <Route path="/create" element={<CreateUser/>}></Route>
        <Route path="/user" element={<User/>}></Route>
        <Route path="/edit/:index" element={<Edituser/>}></Route>

      </Routes>
      
      
      
      </BrowserRouter>
    </div>
  )
}

export default App
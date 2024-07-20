import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './components/login'
import Home from './components/home'
import Registration from './components/register'
import Dashboard from './components/PopUp/dashboard'
import Btn from './components/CreatePage/btn'
import CreateDash from './components/Nav/Nav'
import User from './components/User/User'
import Groups from './components/Groups/Groups'
import Reports from './components/Reports/Reports'
import Settings from './components/Settings/Settings'
function App() {
  return (
    <div>
    <Routes>
        {/* <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="index" element={<Btn />} />
          <Route path="users" element={<p>Users Content</p>} />
          <Route path="groups" element={<p>Groups Content</p>} /> */}
          {/* <Route path='/nav' element={<Sidebar />} /> */}
          {/* <Route path="reports" element={<p>Reports Content</p>} />
          <Route path="settings" element={<p>Settings Content</p>} />
        </Route> */}
        {/* Add other routes as necessary */}
      {/* </Routes> */}
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path='/register' element={<Registration/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/btn' element={<Btn/>}/>
    <Route path='/nav' element={<CreateDash/>}/>
    <Route path='/user' element={<User/>}/>
    <Route path='/groups' element={<Groups/>}/>
    <Route path='/reports' element={<Reports/>}/>
    <Route path='/settings' element={<Settings/>}/>
    </Routes>
    </div>
  )
}

export default App
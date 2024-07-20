import React from 'react'
import RegisterButton from './RegisterButton'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import Btn from '../CreatePage/btn'
import User from '../User/User'

const Dashboard = () => { 
  
  
  return (
    <div><nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <img src='https://ramanasoft.com/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-15-at-6.00.17-PM.jpeg' width={'150px'} style={{marginLeft:'55px'}}/>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav" style={{marginLeft:'25px'}}>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><Link to={'/btn'}>Dashboard</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="<User/>">Users</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Groups</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Reports</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Settings</a>
        </li>
        </ul>
        </div>
        <div style={{marginLeft:'10px'}}>
        <button type="button" class="btn btn-warning" style={{marginLeft:'500px'}}><RegisterButton/></button>
        
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#99919c" class="bi bi-bell-fill" viewBox="0 0 16 16" style={{marginLeft:'15px'}}>
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#99919c" class="bi bi-question-circle-fill" viewBox="0 0 16 16" style={{marginLeft:'15px'}}>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/>
</svg>
<Link to={'/'}><button type="button" class="btn btn-outline-primary" style={{marginLeft:'10px'}}>Logout</button></Link>
</div>

      </div>
    </div>
  </nav>
  <Footer/></div>
  )
}

export default Dashboard
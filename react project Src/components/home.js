import React from 'react'
import { NavLink } from 'react-router-dom'
import './home.css'
import Img from './img'

function home() {
  return (
    <div><nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
    <div style={{margin:'0px 95px'}}>
      <a class="navbar-brand" href="#" ><img src='https://media.licdn.com/dms/image/C560BAQHkva4bpIKz3A/company-logo_200_200/0/1668671643491/ramanasoftware_logo?e=2147483647&v=beta&t=lSHe-hhGyi-3Ps4SnL5lS92as2lKJbG_Wxc6Tanj5tg' width={"25px"} /><b>RamanaSoft</b></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      </div>
      <div class="collapse navbar-collapse" id="navbarNavDropdown" >
        <ul class="navbar-nav" >
          <li class="nav-item" style={{margin:'0px 20px'}}>
            <a class="nav-link active" aria-current="page" href="#">Features</a>
          </li>
          <li class="nav-item dropdown" style={{margin:'0px 20px'}}>
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Product
            </a>
            <b><ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Quiz maker</a></li>
              <li><a class="dropdown-item" href="#">LMS</a></li>
              <li><a class="dropdown-item" href="#">Live quizzes</a></li>
              <li><a class="dropdown-item" href="#">Exam Builder</a></li>
            </ul>
            </b>
          </li>
          <li class="nav-item dropdown" style={{margin:'0px 20px'}}>
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Use Cases
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-briefcase-fill" viewBox="0 0 16 16">
  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5"/>
  <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z"/>
</svg> Business</a></li>
              <li><a class="dropdown-item" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search-heart" viewBox="0 0 16 16">
  <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018"/>
  <path d="M13 6.5a6.47 6.47 0 0 1-1.258 3.844q.06.044.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11"/>
</svg> Recruitment</a></li>
              <li><a class="dropdown-item" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart-line-fill" viewBox="0 0 16 16">
  <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1z"/>
</svg> Onboarding</a></li>
              <li><a class="dropdown-item" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-marker-tip" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5 6.064-1.281-4.696A.5.5 0 0 0 9.736 9H6.264a.5.5 0 0 0-.483.368l-1.28 4.696A6.97 6.97 0 0 0 8 15c1.275 0 2.47-.34 3.5-.936m.873-.598a7 7 0 1 0-8.746 0l1.19-4.36a1.5 1.5 0 0 1 1.31-1.1l1.155-3.851c.213-.713 1.223-.713 1.436 0l1.156 3.851a1.5 1.5 0 0 1 1.31 1.1z"/>
</svg> Education</a></li>
              <li><a class="dropdown-item" href="#">Selling Courses</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown" style={{margin:'0px 20px'}}>
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Resources
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
</svg> Help Guides</a></li>
              <li><a class="dropdown-item" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal" viewBox="0 0 16 16">
  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
</svg> Blogs</a></li>
              <li><a class="dropdown-item" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
</svg> Contact Us </a></li>
            </ul>
          </li>
          <li class="nav-item" style={{margin:'0px 20px'}}>
            <a class="nav-link active" aria-current="page" href="#">Pricing</a>
          </li>
          <NavLink to={"/login"}><button type="button" class="btn btn-outline-primary" style={{marginLeft:'300px'}}>Login</button></NavLink>
          <NavLink to={"/register"}><button type="button" class="btn btn-outline-primary" style={{marginLeft:'15px'}}>Register</button></NavLink>
        </ul>
      </div>
    </div>
  </nav>
  <Img/>
  </div>
  )
}

export default home
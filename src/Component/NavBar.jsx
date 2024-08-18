import { useState } from 'react';
import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';

export default function NavBar() {
  const [menu, setMenu] = useState("");
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <span className="navbar-brand logo text-white" ><b>Prestigious</b> Tech Hub</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             
        <li className="nav-item" onClick={() => {setMenu("home")}}>
        <Link to="/" className="nav-link active" aria-current="page">
        Home {menu === 'home'?<hr/>:<></>}
        </Link>
        
        </li>

        <li className="nav-item" onClick={() => {setMenu("about")}}>
        <Link to="/about" className="nav-link active" aria-current="page">
        About {menu === 'about'?<hr/>:<></>}
        </Link>
        
        </li>
        <li className="nav-item" onClick={() => {setMenu("contact")}}>
        <Link to="/contact" className="nav-link active" aria-current="page">
        Contact {menu === 'contact'?<hr/>:<></>}
        </Link>
        </li>

        <li className="nav-item" onClick={() => {setMenu("blog")}}>
        <Link to="/blog" className="nav-link active" aria-current="page">
        Blog {menu === 'blog'?<hr/>:<></>}
        </Link>
        </li>

        <li className="nav-item" onClick={() => {setMenu("test")}}>
        <Link to="/testimonials" className="nav-link active" aria-current="page">
        Testmonials {menu === 'test'?<hr/>:<></>}
        </Link>
        </li>

        <li className="nav-item" onClick={() => {setMenu("upcoming")}}>
        <Link to="/upcoming" className="nav-link active" aria-current="page">
        UpComing {menu === 'upcoming'?<hr/>:<></>}
        </Link>
        </li>
      </ul>
        <div classNameName="d-flex start-btn" >
          <input type="text" className='search ' placeholder='Search for any info here . . ' />
          
          <Link to="/login" className="" >
         <button className='btn signin btn-outline-dark m-2' >Sign In</button>
        </Link>
          <Link to="/getstarted" className="" >
        <button className='btn btn-primary text-white'>Get Started</button>
        </Link>
         
        </div>
    </div>
  </div>
</nav>
</>
  )
}

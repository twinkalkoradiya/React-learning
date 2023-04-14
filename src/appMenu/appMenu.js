import React from 'react'
import { Link } from 'react-router-dom'
export default function appMenu() {
  return (
    
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
  
    <a href="index3.html" className="brand-link">
      <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}}/>
      <span className="brand-text font-weight-light">AdminLTE 3</span>
    </a>

 
    <div className="sidebar">
     
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="dist/img/cute_girl_dp_image-2212.jpg" className="img-circle elevation-2" alt="User Image"/>
        </div>
        <div className="info">
          <a href="#" className="d-block">Twinkal Koradiya</a>
        </div>
      </div>
     
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        
         
          <li className="nav-item">
            <Link to={"/crud"} className="nav-link">
              <i className="nav-icon fas fa-th"></i>
              <p>
                Crud
              </p>
            </Link>
          </li>
          
        </ul>
      </nav>
     
    </div>
   
  </aside>
  )
}

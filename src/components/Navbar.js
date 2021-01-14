import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Link } from 'react-router-dom'

export default function Navbar() {

   return (
      <nav className="navbar navbar-expand-sm navbar-light px-2 bg-light">
         <Link className="navbar-brand" to="/">Logo</Link>
         <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
               <li className="nav-item active">
                  <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link" to="/contact">contact</Link>
               </li>
            </ul>
         </div>
         <Link to="/user/add" className="text-nowrap ml-auto btn btn-primary">Add New User</Link>
      </nav>
   )
}

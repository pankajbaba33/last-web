import React from "react"
import { Outlet, Link } from "react-router-dom";
export default function Navbarr(){
 return(
    <>
        <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/project">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>

 )
}

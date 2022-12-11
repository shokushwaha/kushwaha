import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css';
import { ReorderRounded } from '@mui/icons-material';
export default function Navbar() {


  const [navStatus, setnavStatus] = useState(false);

  const setNavBehav = () => {
    setnavStatus((prev) => !prev);
  }
  const location = useLocation();

  useEffect(() => {
    setnavStatus(false);
  }, [location]);

  return (
    <div className='navbar' id={navStatus ? "open" : "close"} >

      <div className="toggleButton">
        <button onClick={setNavBehav} ><ReorderRounded /></button>
      </div> 

      <div className="links">

        <NavLink to="/">Home</NavLink>
        <NavLink to="/skill">Skills</NavLink>
        <NavLink to="/project">Projects</NavLink>
        <NavLink to="/education">Education</NavLink>
        <NavLink to="/experience">Experience</NavLink>
      


      </div>


    </div>
  )
}

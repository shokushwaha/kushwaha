import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css';
import { ReorderRounded } from '@mui/icons-material';
import { motion } from 'framer-motion';
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


    <motion.div
    className="container text-center"
    initial={{ opacity: 0, y: "-200px" }}
    animate={{ opacity: 1, y: "0px" }}
    exit={{ opacity: 0, y: "-200px" }}
    transition={{ duration: 0.4,}}
  >


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
  </motion.div>
  )
}

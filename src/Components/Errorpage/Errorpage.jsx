import React from 'react'
import { NavLink } from 'react-router-dom'
import './Errorpage.css'
export default function Errorpage() {
  return (
    <div className='boxx'>

        <div className="onee">Sorry!</div>
        <div className="twoo">The requested page is not found.</div>

        <div className="threee">
            <NavLink to="/">Go Back To Home!!!!</NavLink>
        </div>
    </div>
  )
}

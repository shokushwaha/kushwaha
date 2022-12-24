import { ArrowForward } from '@mui/icons-material'
import { motion } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './Errorpage.css'

export default function Errorpage() {
  return (
    <>




      <motion.div

        initial={{ opacity: 0, x: '-100vh' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: '-100vh' }}
        transition={{ duration: 1, delay: 0.4 }}

      >
        <div className='boxx'>



          <div className="onee">
            <NavLink to="/">Get Started  <ArrowForward /> </NavLink>
          </div>
        </div>
      </motion.div>
    </>
  )
}

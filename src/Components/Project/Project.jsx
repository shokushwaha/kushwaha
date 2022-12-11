import React from 'react'
import './Project.css'
import { motion } from 'framer-motion'
import img1 from './PORTFOLIO.webp'
import img2 from './TICTACTOE.png'
import img3 from './BMI.jpg'
import img4 from './WEATHER.jpg'
export default function Project() {
  return (

    <motion.div
      className="container text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}

    >
      <div className="heading">

        My Projects
      </div>

      <div className="lists">
        <div className="pro">
          <img src={img1} alt="Pic1" />
          <div className="info">
            <span>Portfolio Website</span>
            <p>Tech : ReactJS ,CSS </p>
            <a href="/">Visit</a></div>


        </div>



        <div className="pro">
          <img src={img4} alt="Pic1" />
          <div className="info">
            <span>Weather App</span>
            <p>Tech : ReactJS , CSS</p>
            <a href="https://639349b052c76555ac02aded--scintillating-pony-a9debf.netlify.app/">Visit</a></div>


        </div>

        <div className="pro">
          <img src={img3} alt="Pic1" />
          <div className="info">
            <span>BMI Calculator</span>
            <p>Tech : HTML , CSS , Javascript</p>
            <a href="https://shokushwaha.github.io/BMI-Calculator/">Visit</a></div>


        </div>









        <div className="pro">
          <img src={img2} alt="Pic1" />
          <div className="info">
            <span>Tic Tac Toe </span>
            <p>Tech : HTML , CSS, Javascript</p>
            <a href="https://shokushwaha.github.io/tictactoe.shobhitkushwaha.github.io/">Visit</a></div>


        </div>




      </div>

    </motion.div>
  )
}

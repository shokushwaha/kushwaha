import React, { useEffect, useState } from 'react'
import './Project.css'
import { motion } from 'framer-motion'
import img1 from './PORTFOLIO.webp'
import img2 from './TICTACTOE.png'
import img3 from './BMI.jpg'
import img4 from './WEATHER.jpg'
import img5 from './joke.png'
import img6 from './sps.png'
import img7 from './proj2.jpg'
import img8 from './crypto.ico'
import img9 from './expense.ico'
import img10 from './hex.png'
import img11 from './clac.png'
import img12 from './me.webp'
import img13 from './task.jpg'
import SingleProject from './SingleProject'
export default function Project() {


  return (
    <div className="wrapbo">

      <motion.div
        className="container text-center"
        initial={{ opacity: 0, y: '-200vh' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '-200vh' }}
        transition={{ duration: 1 }}

      >
        <div className="heading">

          My Projects
        </div>

        <div className="lists">

          {/* portfolio website  */}
          <SingleProject name="Portfolio Website" img={img1} tech=" ReactJS " url="/" />
          {/* e commerce website  */}
          <SingleProject name="Ecommerce Website" img={img7} tech=" MERN " url="#" />
          {/* task manager  */}
          <SingleProject name="Task Manager" img={img13} tech=" ReactJS " url="        https://taskit-shobhit.netlify.app/" />
          {/* expense tracker  */}
          <SingleProject name="Expense Tracker" img={img9} tech=" ReactJS " url="https://expenses-shobhit.netlify.app/" />
          {/* weather app  */}
          <SingleProject name="Weather App" img={img4} tech=" ReactJS " url="  https://weathershobhit.netlify.app/" />
          {/* crypto price tracker  */}
          <SingleProject name="Crypto Price" img={img8} tech=" ReactJS " url=" https://crypto-shobhit.netlify.app/" />
          {/* bmi calculator  */}
          <SingleProject name="BMI Calculator" img={img3} tech=" ReactJS " url=" https://shokushwaha.github.io/BMI-Calculator/" />
          {/* random jokes  */}
          <SingleProject name="Random Jokes" img={img5} tech=" ReactJS " url="  https://joke-shobhit.netlify.app/" />
          {/* old portfolio  */}
          <SingleProject name="Portfolio" img={img12} tech="  HTML , CSS, Javascript " url="  https://shokushwaha.github.io/ImShobhitKushwaha.github.io/" />
          {/* tic tac toe  */}
          <SingleProject name="Tic Tac Toe" img={img2} tech="  HTML , CSS, Javascript " url="https://shokushwaha.github.io/tictactoe.shobhitkushwaha.github.io/" />
          {/* rock paper scissior  */}
          <SingleProject name="Stone Paper Scissior" img={img6} tech="  HTML , CSS, Javascript " url="https://shokushwaha.github.io/rock_paper_scissor_shobhitkushwaha-github-io/" />
          {/* random hex color generator  */}
          <SingleProject name="Hex Color Generator" img={img10} tech="  HTML , CSS, Javascript " url="https://shokushwaha.github.io/Random-Awesome-Hex-Generator/" />
          {/* Calculator  */}
          <SingleProject name="Calculator" img={img11} tech="  HTML , CSS, Javascript " url="https://shokushwaha.github.io/Calculator/" />


        </div>

      </motion.div>

    </div>
  )
}

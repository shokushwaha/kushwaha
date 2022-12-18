import React from 'react'
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
          <div className="pro">
            <img src={img1} alt="Pic1" />
            <div className="info">
              <span>Portfolio Website</span>
              <p>Tech : ReactJS  </p>
              <a href="/" target='_blank' >Visit</a></div>


          </div>

          {/* e commerce website  */}
          <div className="pro">
            <img src={img7} alt="Pic1" />
            <div className="info">
              <span>Ecommerce Website</span>
              <p>Tech : MERN   </p>
              <a href="#" target='_blank' onClick={() => {
                alert(`Site is under development....visit after sometime!!`)
              }} >Visit</a></div>


          </div>
          {/* expense tracker  */}
          <div className="pro">
            <img src={img9} alt="Pic1" />
            <div className="info">
              <span>Expense Tracker</span>
              <p>Tech : ReactJS </p>
              <a href="https://expenses-shobhit.netlify.app/ " target='_blank'>Visit</a></div>


          </div>


          {/* weather app  */}
          <div className="pro">
            <img src={img4} alt="Pic1" />
            <div className="info">
              <span>Weather App</span>
              <p>Tech : ReactJS </p>
              <a href="  https://weathershobhit.netlify.app/" target='_blank'>Visit</a></div>


          </div>
          {/* crypto price tracker  */}
          <div className="pro">
            <img src={img8} alt="Pic1" />
            <div className="info">
              <span>Crypto Price</span>
              <p>Tech : ReactJS </p>
              <a href="  https://crypto-shobhit.netlify.app/ " target='_blank'>Visit</a></div>


          </div>




          {/* bmi calculator  */}
          <div className="pro">
            <img src={img3} alt="Pic1" />
            <div className="info">
              <span>BMI Calculator</span>
              <p>Tech : HTML , CSS , Javascript</p>
              <a href="https://shokushwaha.github.io/BMI-Calculator/" target='_blank'>Visit</a></div>


          </div>


          {/* random jokes  */}
          <div className="pro">
            <img src={img5} alt="Pic1" />
            <div className="info">
              <span>Random Jokes </span>
              <p>Tech : ReactJS , Axios</p>
              <a href=" https://joke-shobhit.netlify.app/" target='_blank' >Visit</a></div>


          </div>


          {/* old portfolio  */}

          <div className="pro">
            <img src={img12} alt="Pic1" />
            <div className="info">
              <span>Portfolio Website</span>
              <p>Tech : HTML , CSS, Javascript</p>
              <a href="  https://shokushwaha.github.io/kushwaha/" target='_blank'>Visit</a></div>
          </div>

          {/* tic tac toe  */}

          <div className="pro">
            <img src={img2} alt="Pic1" />
            <div className="info">
              <span>Tic Tac Toe </span>
              <p>Tech : HTML , CSS, Javascript</p>
              <a href="https://shokushwaha.github.io/tictactoe.shobhitkushwaha.github.io/" target='_blank'>Visit</a></div>
          </div>


          {/* rock paper scissior  */}
          <div className="pro">
            <img src={img6} alt="Pic1" />
            <div className="info">
              <span>Stone Paper Scissior </span>
              <p>Tech : HTML , CSS, Javascript</p>
              <a href="https://shokushwaha.github.io/rock_paper_scissor_shobhitkushwaha-github-io/" target='_blank'>Visit</a></div>


          </div>

          {/* random hex color generator  */}
          <div className="pro">
            <img src={img10} alt="Pic1" />
            <div className="info">
              <span>Hex Color Generator</span>
              <p>Tech : ReactJS , CSS</p>
              <a href=" https://shokushwaha.github.io/Random-Awesome-Hex-Generator/    " target='_blank'>Visit</a></div>


          </div>

          {/* Calculator  */}
          <div className="pro">
            <img src={img11} alt="Pic1" />
            <div className="info">
              <span>Calculator</span>
              <p>Tech : ReactJS , CSS</p>
              <a href=" https://shokushwaha.github.io/Calculator/ " target='_blank'>Visit</a></div>


          </div>


        </div>

      </motion.div>

    </div>
  )
}

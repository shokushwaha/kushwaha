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
import img14 from './keeper.webp'
import img15 from './chat.png'
import img20 from './img20.webp'
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
          <SingleProject name="Portfolio Website" img={img1} tech=" ReactJS " url="" giturl="https://github.com/shokushwaha/kushwaha" />


          {/* e commerce website  */}
          <SingleProject name="Social Media App" img={img7} tech=" MERN " url="" giturl="https://github.com/shokushwaha/social-media-app-rest-api" />


          {/* chat app  */}
          <SingleProject name="Chat App" img={img15} tech=" ReactJS Socket.io " url="" giturl="https://github.com/shokushwaha/chat-app" />

          {/* keeper app  */}
          <SingleProject name="Keeper App" img={img14} tech=" React Native" url="" giturl="https://github.com/shokushwaha/react-native-task-keeper" />


          {/* expense tracker  */}
          <SingleProject name="Expense Tracker" img={img9} tech=" ReactJS " url="https://expenses-shobhit.netlify.app/" giturl="https://github.com/shokushwaha/expense-tracker" />



          {/* News App  */}
          <SingleProject name="News App" img={img20} tech=" ReactJS " url="https://news-shobhit.netlify.app/" giturl="https://github.com/shokushwaha/news-app-react" />





          {/* weather app  */}
          <SingleProject name="Weather App" img={img4} tech=" ReactJS " url="  https://weathershobhit.netlify.app/" giturl="https://github.com/shokushwaha/Weather-App-React" />
          {/* task manager  */}
          <SingleProject name="Task Manager" img={img13} tech=" ReactJS " url="        https://taskit-shobhit.netlify.app/" giturl="https://github.com/shokushwaha/todolist-react-local-storage" />


          {/* crypto price tracker  */}
          <SingleProject name="Crypto Price" img={img8} tech=" ReactJS " url=" https://crypto-shobhit.netlify.app/" giturl="https://github.com/shokushwaha/crypto-price-tracker" />


          {/* random jokes  */}
          <SingleProject name="Random Jokes" img={img5} tech=" ReactJS " url="  https://joke-shobhit.netlify.app/" giturl="https://github.com/shokushwaha/jokes-app-" />

          {/* bmi calculator  */}
          <SingleProject name="BMI Calculator" img={img3} tech="HTML , CSS, Javascript " url=" https://shokushwaha.github.io/BMI-Calculator/" giturl="https://github.com/shokushwaha/BMI-Calculator" />



          {/* old portfolio  */}
          <SingleProject name="Portfolio" img={img12} tech="  HTML , CSS, Javascript " url="  https://shokushwaha.github.io/ImShobhitKushwaha.github.io/" giturl="https://github.com/shokushwaha/ImShobhitKushwaha.github.io" />
          {/* tic tac toe  */}


          <SingleProject name="Tic Tac Toe" img={img2} tech="  HTML , CSS, Javascript " url="https://shokushwaha.github.io/tictactoe.shobhitkushwaha.github.io/" giturl="" />


          {/* rock paper scissior  */}
          <SingleProject name="Stone Paper Scissior" img={img6} tech="  HTML , CSS, Javascript " url="https://shokushwaha.github.io/rock_paper_scissor_shobhitkushwaha-github-io/" giturl="" />


          {/* random hex color generator  */}
          <SingleProject name="Hex Color Generator" img={img10} tech="  HTML , CSS, Javascript " url="https://shokushwaha.github.io/Random-Awesome-Hex-Generator/" giturl="" />


          {/* Calculator  */}
          <SingleProject name="Calculator" img={img11} tech="  HTML , CSS, Javascript " url="https://shokushwaha.github.io/Calculator/" giturl="" />


        </div>

      </motion.div>

    </div>
  )
}

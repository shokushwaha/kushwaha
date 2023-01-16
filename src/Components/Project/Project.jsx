import React, { useEffect, useState } from 'react'
import './Project.css'
import { motion } from 'framer-motion'
import img1 from './task.png'
import img2 from './ttt.png'
import img3 from './weather.png'
import img4 from './jokes.png'
import img5 from './crypto.png'
import img6 from './expenses.png'
import img7 from './cextension.png'
import img8 from './sps.png'
import img9 from './hex.png'
import img10 from './chat.png'
import img11 from './social.png'
import img12 from './multi.jpg'
import img13 from './news.png'
import img14 from './receipe.png'
import img15 from './blog.png'

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


          {/* blog app  */}
          <SingleProject name="Blog Website" img={img15} tech=" ReactJS,Firebase " url="https://blogs-shobhit.netlify.app/" giturl="https://github.com/shokushwaha/blog-app-react-firebase" desc="A blogging website to write blogs and publish them worldwide." />

          {/* social media website  */}
          <SingleProject name="Social Media App" img={img11} tech=" MERN " url="" giturl="https://github.com/shokushwaha/social-media-app-rest-api" desc="A Social Media app to build a network with the functionality of making friends,uploading photos,like and comment on them." />

          {/* chat app  */}
          <SingleProject name="Chatify" img={img10} tech=" ReactJS  Socket.io " url="" giturl="https://github.com/shokushwaha/chat-app" desc="Chatify is an application to text chat with your friends." />

          {/* react native app having multiple functions  */}
          <SingleProject name="Comboo" img={img12} tech=" React Native " url="" giturl="https://github.com/shokushwaha/multi-utility-react-native-app" desc="Comboo is a cross platform application having weather app ,calulator,todolist,clock." />

          {/* receipes app  */}
          <SingleProject name="Receipess" img={img14} tech=" ReactJS " url="" giturl="https://github.com/shokushwaha/react-vite-receipes-app" desc="Receipess is an application to find receipe of any food." />

          {/* keeper app  */}
          <SingleProject name="ManageTasks" img={img1} tech=" React Native" url="" giturl="https://github.com/shokushwaha/react-native-task-keeper" desc="ManageTasks is a cross platform application to keep a track on your daily tasks." />

          {/* Socail media sites blocker extension  */}
          <SingleProject name="BlockSocial" img={img7} tech=" Javascript " url="" giturl="https://github.com/shokushwaha/chrome-extension-social-sites-blocker" desc="BlockSocial is a chrome extension to block all the social media sites and ott platforms." />

          {/* expense tracker  */}
          <SingleProject name="Expenses" img={img6} tech=" ReactJS " url="https://expenses-shobhit.netlify.app/" giturl="https://github.com/shokushwaha/expense-tracker" desc="Expenses is an application to manage all ur expenses at one place." />

          {/* News App  */}
          <SingleProject name="NewsIttt" img={img13} tech=" ReactJS " url="https://news-shobhit.netlify.app/" giturl="https://github.com/shokushwaha/news-app-react" desc="NewsIttt is an application to read latest news articles of all categories." />

          {/* weather app  */}
          <SingleProject name="Weatherr" img={img3} tech=" ReactJS " url="  https://weathershobhit.netlify.app/" giturl="https://github.com/shokushwaha/Weather-App-React" desc="Weatherr is an application to fetch weather information of any place." />

          {/* crypto price tracker  */}
          <SingleProject name="CryptoP" img={img5} tech=" ReactJS " url=" https://crypto-shobhit.netlify.app/" giturl="https://github.com/shokushwaha/crypto-price-tracker" desc="CryptoP is an application to keep you updated with the latest prices of crypto currencies." />

          {/* random jokes  */}
          <SingleProject name="Jokess" img={img4} tech=" ReactJS " url="  https://joke-shobhit.netlify.app/" giturl="https://github.com/shokushwaha/jokes-app-" desc="Jokess is an application to keep you fresh with a new joke everytime." />

          {/* tic tac toe  */}
          <SingleProject name="Tic Tac Toe" img={img2} tech="  HTML , CSS, Javascript " url="https://shokushwaha.github.io/tictactoe.shobhitkushwaha.github.io/" giturl="" desc="Tic Tac Toe is an application to play tic tac toe." />

          {/* rock paper scissior  */}
          <SingleProject name="Stone Paper Scissior" img={img8} tech="  HTML , CSS, Javascript " url="https://shokushwaha.github.io/rock_paper_scissor_shobhitkushwaha-github-io/" giturl="" desc="Stone Paper Scissior is an application to play stone paper scissior." />


          {/* random hex color generator  */}
          <SingleProject name="AwsmHexx" img={img9} tech="  HTML , CSS, Javascript " url="https://shokushwaha.github.io/Random-Awesome-Hex-Generator/" giturl="" desc="AwsmHexx is an application to provide linear hex background css code." />




        </div>

      </motion.div>

    </div>
  )
}

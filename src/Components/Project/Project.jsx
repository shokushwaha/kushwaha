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

import img16 from './admin.png'
import img17 from './ecommerce.png'
import img18 from './clipper.png'
import img19 from './twitter.png'
import img20 from './file.png'
import img21 from './kart.png'
import img22 from './cs.png'

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

          {/* Ecommerce Admin Panel */}
          <SingleProject name="NextZone - Admin Panel" img={img16} tech="NextJS,Mongodb,AWS.TailwindCSS" url="" giturl="https://github.com/shokushwaha/ecom-admin-panel" desc="Admin Panel for an ecommerce website." />

          {/* Ecommerce Website */}
          <SingleProject name="NextZone - Ecommerce Platform" img={img17} tech="NextJS,Mongodb,Cloudinary.TailwindCSS" url="" giturl="https://github.com/shokushwaha/ecom-client" desc="An ecommerce website." />

          {/*Clipper */}
          < SingleProject name="Clipper" img={img18} tech="NextJS,Firebase,TailwindCSS " url="" giturl="https://github.com/shokushwaha/Clipper" desc="A video storing and streaming platform with advanced features" />


          {/* Twitter Decentralized*/}
          <SingleProject name="Twitter - Decentralized" img={img19} tech=" ReactJS,Solidity " url="https://twitter-decentralized-shobhit.netlify.app/" giturl="https://github.com/shokushwaha/twitter-decentralized" desc="Twitter using decentralized technologies" />

          {/* Antisocial*/}
          <SingleProject name="Antisocial" img={img11} tech=" ReactJS,React-ChatEngine " url="" giturl="https://github.com/shokushwaha/antisocial" desc="Chat Application" />


          {/*CodeSync*/}
          <SingleProject name="CodeSync" img={img22} tech=" ReactJS,Socket.io " url="https://codev-shobhit.netlify.app/" giturl="https://github.com/shokushwaha/code-sync" desc="A real time code sharing applicaiton." />

          {/*Dkart*/}
          <SingleProject name="Dkart" img={img21} tech=" ReactJS,Solidity " url="" giturl="https://github.com/shokushwaha/e-commerce-marketplace-decentralized" desc="A decentralized ecommerce platform." />


          {/*File Sharing Decentralized*/}
          <SingleProject name="Decentralized File Sharing" img={img20} tech=" v " url="" giturl="https://github.com/shokushwaha/file-sharing-decentralized" desc="A file sharing application utitilizing peer to peer connections." />


          {/* blog app  */}
          <SingleProject name="Blog Website" img={img15} tech=" ReactJS,Firebase " url="https://blogs-shobhit.netlify.app/" giturl="https://github.com/shokushwaha/blog-app-react-firebase" desc="A blogging website to write blogs and publish them worldwide." />

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






        </div>

      </motion.div>

    </div>
  )
}

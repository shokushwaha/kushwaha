import { Download, GitHub, LinkedIn, MotionPhotosAuto } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import './Home.css'
import { motion } from 'framer-motion';
export default function Home() {

  const [text, setText] = useState("");
  const [sentence, setSentence] = useState(`I'm Shobhit Kushwaha`);
  const [cnt, setCnt] = useState(0);
  const [quote, setAuote] = useState(`MERN Stack Developer & Competitive Programmer`);
  const [intro, setIntro] = useState("");

  useEffect(() => {
    if (cnt < sentence.length) {
      setTimeout(() => {
        setText(text + sentence[cnt]);
        setCnt(cnt + 1);
      }, 200)
    }
  }, [cnt]);

  useEffect(() => {
    setTimeout(() => {
      setIntro(quote);
    }, 5000)
  }, []);

  return (


    <motion.div
      className="container text-center"
      initial={{ opacity: 0,scale:0.5 }}
      animate={{ opacity: 1 ,scale:1}}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}

    >

      <div className="home">
        <div className="about">
          <h2>  <span> Hi! </span><br /> {text} </h2>
          <div className="prompt">
            <p>{intro}</p>
            <a href="https://www.linkedin.com/in/shobhit-kushwaha-aa8578221" target="_blank"> <LinkedIn /></a>
            <a href="https://github.com/shokushwaha" target="_blank "><GitHub /></a>
          

          </div>
          <div className="resume">
            <a href="./Shobhit Kushwaha's Resume.pdf" download><button>

              <Download /> </button></a>

          </div>
              <div className='resumeSpan'> Resume</div>
        </div>



      </div>
    </motion.div>

 
  )
}

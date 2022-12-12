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
      }, 100)
    }
  }, [cnt]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIntro(quote);
  //   }, 4000)
  // }, []);

  return (


    <motion.div
      className="container text-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}

    >



      <div className="home">
        <div className="about">
          <h2>  <span> Hi! </span><br /> {text} </h2>
          <div className="prompt">
            
          <motion.div
              className="container text-center"
              initial={{ opacity: 0, x: "1000px" }}
              animate={{ opacity: 1, x: "0px" }}
              exit={{ opacity: 0, x: "1000px" }}
              transition={{ duration: 1, delay: 1 }}
            >

            <p>{quote}</p>
            </motion.div>


            <motion.div
              className="container text-center"
              initial={{ opacity: 0, y: "200px" }}
              animate={{ opacity: 1, y: "0px" }}
              exit={{ opacity: 0, y: "200px" }}
              transition={{ duration: 2, delay: 1 }}
            >
              <a href="https://www.linkedin.com/in/shobhit-kushwaha-aa8578221" target="_blank"> <LinkedIn /></a>
              <a href="https://github.com/shokushwaha" target="_blank "><GitHub /></a>

            </motion.div>

          </div>
          <div className="resume">
            <a href="./Shobhit Kushwaha's Resume.pdf" download>

              <motion.button

                whileHover={{ scale: 1.1, backgroundColor: "azure", boxShadow: "0px 0px 40px white" }}
                whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
              >

                <button>

                  <Download />
                </button>
              </motion.button>
            </a>

          </div>
          <div className='resumeSpan'> Resume</div>
        </div>



      </div>
    </motion.div>


  )
}

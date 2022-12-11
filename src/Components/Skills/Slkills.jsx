import React from 'react'
import "./Skills.css"
import { motion } from 'framer-motion'
export default function Skills() {
  return (

    <motion.div
      className="container text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}

    >

      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>


              <li>ReactJS & Redux</li>
              <li>HTML</li>
              <li>CSS & SCSS</li>
              <li>NPM + Yarn</li>
              <li>Bootstrap + Material UI</li>
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>

              <li>NodeJS</li>
              <li>ExpressJS</li>
              <li>MySQL</li>
              <li>Mongoose</li>
              <li>MongoDB</li>
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>
              <li>C++</li>
              <li>C</li>
              <li>Javsacript</li>
              <li>Java</li>
              <li>Python</li>
            </span>
          </li>

          <li className="item">
            <h2>Other Tech</h2>
            <span>
              <li>Apache</li>
              <li>XAMP</li>
              <li>VS Code</li>
              <li>Andriod Studio</li>
              <li>Linux</li>
            </span>
          </li>
        </ol>
      </div>
      <div className="wrap">
        <div className="achv">Achievements</div>
        <div className="honors">
          <div className="awards">
            <ul>
              <li>AIR 1739 in Google Kickstart 2022</li>
              <li>AIR 1739 in Codechef Round 2022</li>
              <li>300+ Questions on LeetCode</li>
              <li>250+ QUestions on Geeks For Geeks</li>
            </ul>
          </div>
          <div className="coding">
            <a href="" target="_blank" className='temp'>Leetcode</a>
            <a href="" target="_blank" className='temp'>Geeks For Geeks</a>
            <a href="" target="_blank" className='temp'>HackerRank</a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

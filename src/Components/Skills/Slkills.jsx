import React from 'react'
import "./Skills.css"
import { motion } from 'framer-motion'
import { Link } from '@mui/material'
import { ArchiveRounded, CodeSharp, CodeTwoTone, GifBox, Hearing, LinkOffOutlined, LinkRounded, SearchRounded, SkipNextOutlined, WifiRounded } from '@mui/icons-material'
export default function Skills() {
  return (

    <motion.div
      className="container text-center"
      animate={{ scale:[1,2,2,1,1],
      rotate:[0,0,270,270,0],
      borderRadius:["20%","20%","50%","50%","20%"]}}
      transition={{ duration: 1 }}

    >

      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>


              <li>     ReactJS & Redux</li>
              <li> HTML</li>
              <li> CSS & SCSS</li>
              <li> NPM + Yarn</li>
              <li> Bootstrap + Material UI</li>
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>

              <li> NodeJS</li>
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
              <li>  <ArchiveRounded/> AIR 1739 in Google Kickstart 2022</li>
              <li>  <ArchiveRounded/>AIR 1739 in Codechef Round 2022</li>
              <li> <ArchiveRounded/>300+ Questions on LeetCode</li>
              <li> <ArchiveRounded/>250+ QUestions on Geeks For Geeks</li>
            </ul>
          </div>
          <div className="coding">
            <a href="https://leetcode.com/shobhitkushwaha1406" target="_blank" className='temp'>   <LinkRounded /> Leetcode</a>
            <a href="https://auth.geeksforgeeks.org/user/kushwahashobhit255" target="_blank" className='temp'> <LinkRounded />  Geeks For Geeks</a>
            <a href="https://www.hackerrank.com/kushwahashobhit1" target="_blank" className='temp'> <LinkRounded />  HackerRank</a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

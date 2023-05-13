import React from 'react'
import "./Skills.css"
import { motion } from 'framer-motion'
import { Link } from '@mui/material'
import { ArchiveRounded, CodeSharp, CodeTwoTone, GifBox, Hearing, LinkOffOutlined, LinkRounded, SearchRounded, SkipNextOutlined, WifiRounded } from '@mui/icons-material'
export default function Skills() {
  return (

    <>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <motion.div
            className="container text-center"
            initial={{ opacity: 0, y: "2000px" }}
            animate={{ opacity: 1, y: "0px" }}
            exit={{ opacity: 0, y: "2000px" }}
            transition={{ duration: 1, delay: 0.4 }}
          >

            <li className="item">



              <h2> Front-End</h2>
              <span>
                <li>ReactJS & Redux</li>
                <li>NextJS</li>
                <li>React Native</li>
                <li>Tailwind CSS</li>
                <li>Styled Components</li>
                <li> CSS + UI Frameworks</li>
              </span>
            </li>
          </motion.div>
          <motion.div
            className="container text-center"
            initial={{ opacity: 0, y: "-2000px" }}
            animate={{ opacity: 1, y: "0px" }}
            exit={{ opacity: 0, y: "0px" }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <li className="item">
              <h2>Back-End</h2>
              <span>
                <li>NodeJS</li>
                <li>ExpressJS</li>
                <li>GraphQL</li>
                <li>Firebase</li>
                <li>AWS</li>
                <li>MongoDB</li>
                <li>MySQL</li>
              </span>
            </li></motion.div>
          <motion.div
            className="container text-center"
            initial={{ opacity: 0, y: "2000px" }}
            animate={{ opacity: 1, y: "0px" }}
            exit={{ opacity: 0, y: "200px" }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <li className="item">
              <h2>Languages</h2>
              <span>
                <li>C++</li>
                <li>C</li>
                <li>Solidity</li>
                <li>Javsacript + Typescript</li>
                <li>Java</li>
                <li>Python</li>
              </span>
            </li>
          </motion.div> <motion.div
            className="container text-center"
            initial={{ opacity: 0, y: "-2000px" }}
            animate={{ opacity: 1, y: "0px" }}
            exit={{ opacity: 0, y: "0px" }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <li className="item">
              <h2>Other Tech</h2>
              <span>
                <li>Web3</li>
                <li>Hardhat + Polygon</li>
                <li>Apache</li>
                <li>XAMP</li>
                <li>Linux</li>
              </span>
            </li>
          </motion.div>
        </ol>
      </div>
      <div className="wrap">
        <div className="achv">Achievements</div>
        <div className="honors">
          <div className="awards">
            <ul>
              <li>  <ArchiveRounded /> AIR 1739 in Google Kickstart 2022</li>
              <li>  <ArchiveRounded />4⭐ on Codechef & Pupil on Codeforces</li>
              <li> <ArchiveRounded />400+ Questions on LeetCode</li>
              <li> <ArchiveRounded />500+ Questions on Geeks For Geeks</li>
            </ul>
          </div>
          <div className="coding">
            <a href="https://leetcode.com/shobhitkushwaha1406" target="_blank" className='tempp'>   <LinkRounded /> Leetcode</a>
            <a href="https://auth.geeksforgeeks.org/user/kushwahashobhit255" target="_blank" className='tempp'> <LinkRounded />  Geeks For Geeks</a>
            <a href="https://www.hackerrank.com/kushwahashobhit1" target="_blank" className='tempp'> <LinkRounded /> HackerRank</a>
          </div>
        </div>
      </div>

    </>
  )
}

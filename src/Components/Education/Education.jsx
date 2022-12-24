import { School } from '@mui/icons-material';
import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import './Education.css'
import { motion } from 'framer-motion';
export default function Education() {
  return (

    <>


      <motion.div
        className="container text-center"
        initial={{ opacity: 0, x: '-100vh' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: '-100vh' }}
        transition={{ duration: 1 }}

      >
        <div className="exp-box">

          <div className="experience">
            <VerticalTimeline lineColor="#3e497a">


              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="April 2018 - March 2019"
                iconStyle={{ background: "#da9e63", color: " #122223", boxShadow: "0px 0px 40px #efe2ba" }}
                icon={<School />}
              >
                <h3 className="vertical-timeline-element-title i1">
                  Holy Wisdom School, Champawat, Uttarakhand
                </h3>
                <p> High School CBSE - 96.2%</p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--education "
                date="April 2020 - March 2021"
                iconStyle={{ background: "#da9e63", color: " #122223", boxShadow: "0px 0px 40px #efe2ba" }}
                icon={<School />}
              >
                <h3 className="vertical-timeline-element-title i2">
                  Holy Wisdom School, Champawat, Uttarakhand
                </h3>
                <p> Inter School CBSE - 96.2%</p>
              </VerticalTimelineElement>








              <VerticalTimelineElement
                className="vertical-timeline-element--education "
                date="December 2021 - July 2025
         (Present) "
                iconStyle={{ background: "#da9e63", color: " #122223", boxShadow: "0px 0px 40px #efe2ba" }}
                icon={<School />}
              >
                <h3 className="vertical-timeline-element-title i3">
                  PDPM Indian Institute Of Information Technology Design And Manufacturing Jabalpur,Madhya Pradesh
                </h3>

                <h4 className="vertical-timeline-element-subtitle">
                  Bachelor Of Technology
                </h4>

                <p> Computer Science And Engineering</p>
              </VerticalTimelineElement>



            </VerticalTimeline>
          </div>
        </div>


      </motion.div>
    </>
  )
}

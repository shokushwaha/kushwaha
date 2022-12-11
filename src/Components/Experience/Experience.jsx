import { School, Work } from '@mui/icons-material';
import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import './Experience.css'
import { motion } from 'framer-motion';
export default function Experience() {
  return (

    <>

      <motion.div
        className="container text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}

      >



        <div className="exp-box">

          <div className="experience">
            <VerticalTimeline lineColor="#3e497a">




              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="June 2022-July 2022"
                iconStyle={{ background: "blue", color: "#fff", boxShadow:"0px 0px 40px blue" }}
                icon={<Work />}
              >
                <h3 className="vertical-timeline-element-title  i1 ">
                  Content Developer - MathonGo
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Internship
                </h4>
                <p>Designed & Curated questions for IITJEE Advanced Examination</p>
              </VerticalTimelineElement>


              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="June 2022 - September 2022"
                iconStyle={{ background: "green", color: "#fff", boxShadow:"0px 0px 40px green" }}
                icon={<Work />}
              >
                <h3 className="vertical-timeline-element-title i2">
                  Campus Ambassador - engineerHUB
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Internship
                </h4>
                <p>
                  Spreading the organisation   in different colleges communities.
                </p>
              </VerticalTimelineElement>


              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="August 2022 - Present"
                iconStyle={{ background: "yellow", color: "black", boxShadow:"0px 0px 40px yellow" }}
                icon={<Work />}
              >
                <h3 className="vertical-timeline-element-title i3">
                  Management Coordinator - engineerHUB
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Internship
                </h4>
                <p>
                  Managing recruting process and internal working of the organisation.
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </motion.div>
    </>
  )
}

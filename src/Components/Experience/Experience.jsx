import { Work } from '@mui/icons-material';
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
        initial={{ opacity: 0, x: '200vh' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: '200vh' }}
        transition={{ duration: 1 }}

      >



        <div className="exp-box">

          <div className="experience">
            <VerticalTimeline lineColor="#3e497a" backgroundColor="#122223">






              <VerticalTimelineElement
                className="vertical-timeline-element--work   myhead"
                date="June 2022-July 2022"
                iconStyle={{ background: "#da9e63", color: " #122223", boxShadow: "0px 0px 40px #efe2ba" }}
                icon={<Work />}
              >
                <h3 className="vertical-timeline-element-title  i1 " backgroundColor="#122223"  >
                  Content Developer - MathonGo
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Internship
                </h4>
                <p>Designed & Curated questions for IITJEE Advanced Examination</p>
              </VerticalTimelineElement>





              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="August 2022 - December 2022"
                iconStyle={{ background: "#da9e63", color: " #122223 ", boxShadow: "0px 0px 40px #efe2ba" }}
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


              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="December 2022 - Present"
                iconStyle={{ background: "#da9e63", color: " #122223 ", boxShadow: "0px 0px 40px #efe2ba" }}
                icon={<Work />}
              >
                <h3 className="vertical-timeline-element-title i3">
                  Senior Coordinator - engineerHUB
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Internship
                </h4>
                <p>
                  Senior Coordinator in Internal Management Team.
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="March 2023 - Present"
                iconStyle={{ background: "#33ff00", color: " #122223 ", boxShadow: "0px 0px 40px #efe2ba" }}
                icon={<Work />}
              >
                <h3 className="vertical-timeline-element-title i3">
                  Full Stack Developer - FutraInc
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Internship
                </h4>
                <p>
                  Working on modern technologies like Next.js and developing modern apps.
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </motion.div>
    </>
  )
}

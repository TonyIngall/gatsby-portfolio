import React from "react"
import TestimonialView from "../components/about/testimonialView"
import ExperienceView from "../components/about/experienceView"
import Layout from "../components/layout"
import { Fade } from "react-reveal"

import image from "../../content/assets/_MG_0393.jpg"

export default function About() {
  return (
    <Layout width={"100%"} right="0" left="0">
      <Fade up>
        <div className="bio-section">
          <div className="bio-image">
            <div id="tl"></div>
            <div id="tr"></div>
            <div id="bl"></div>
            <div id="br"></div>
            <img className="origin-image" src={image} />
          </div>
          <div className="bio-text">
            <h1>Who?</h1>
            <p>
              I'm Anthony Ingall, if you couldn't already tell from the plasterings of my name all over. I usually go by Tony though. 
              As an aspiring front-end developer, I spend my time at home learning, absorbing, and practicing with technologies and tools. 
              I'm always striving to overcome myself, and reflecting realistically upon past work to improve my workflow and quality after every project.
            </p>
          </div>
        </div>
      </Fade>
      <div style={{background: "#eaeaea", padding: '16px 0', marginBottom: "50px"}}>
        <div className="journey-section">
          <h1>Journey</h1>
          <div className="journey-items">
            <ExperienceView />
          </div>
        </div>
      </div>
      <div className="testimonial-view">
        <h1>Testimonials</h1>
        <TestimonialView />
      </div>
    </Layout>
  )
}

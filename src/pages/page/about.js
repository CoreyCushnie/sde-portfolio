import * as React from "react"

import Text from "../../components/Text"
import Card from "../../components/card.component"
import Skills from "../../components/skills.component"

import "../../styles/about.style.css"

const AboutPage = ({ skillsData }) => {
  const textSize = 12
  return (
    <div>
      <div className="about-details-container">
        <Text
          alignSelf={
            typeof window !== "undefined" && window.innerWidth < 1000 && "left"
          }
          size="42"
          color="#282828"
          weight="900"
          margin="0 0 15px 0"
        >
          ABOUT ME
        </Text>
        <Text size={textSize} lHeight="15px" margin="10px 0" color="black">
          I’m a front-end web and mobile developer with 10 years of
          experimenting with different languages and frameworks and 6 years of
          freelance experience. Growing up in the city, I find inspiration
          around every corner. I love every step of the SDLC process and pride
          myself in the fast, responsive, and aestically pleasing applications
          I’ve had the pleasure to be apart of. Everything i’ve done until this
          point has helped me develop the skills needed to take a project to its
          next level.
        </Text>
        <Text size={textSize} lHeight="15px" margin="10px 0" color="black">
          Discovering new concepts to ideas and solutions that exceed a user's
          expectation is what keeps me focused on technology's continuing
          advancement and strengthens my passion for engineering. I've
          cultivated a reputation as a contributor in every project I'm involved
          with and look forward to continuing to facilitate positive change and
          impacting outcomes.
        </Text>
        <Text size={textSize} lHeight="15px" margin="10px 0" color="black">
          Outside of writing code, I have tons of hobbies and interests! I’m a
          fan of beautiful architecture and great experiences. I’m always
          listening to music or watching a TV show, and I love to travel.
        </Text>
      </div>
      <div className="bottom-container">
        <div className="about-education">
          <Text
            alignSelf={
              typeof window !== "undefined" &&
              window.innerWidth < 1000 &&
              "left"
            }
            size="42"
            color="#282828"
            weight="900"
          >
            EDUCATION
          </Text>

          <Card
            school="CUNY - John Jay College"
            major="Computer Science and Information Security"
            studies="B. S. (Honors in Major)"
            dates="Jan 2018 - May 2021"
          />

          <Card
            school="The Knowledge House"
            major="Web Development - Product Management"
            studies=" "
            dates="June 2018 - Sep 2018"
          />
        </div>
        <div className="about-skills">
          <Text
            alignSelf={
              typeof window !== "undefined" &&
              window.innerWidth < 1000 &&
              "left"
            }
            size="42"
            color="#282828"
            weight="900"
          >
            SKILLS
          </Text>
          <div style={{ margin: "20px 0" }}>
            <Skills skillsData={skillsData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage

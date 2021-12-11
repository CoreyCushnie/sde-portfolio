import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"
import Text from "./Text"

import "../styles/mini-project-card.style.css"

const MiniProjectCard = ({ projectData, linkIdx }) => {
   
  const link1 = "../images/WebCRWN1.png"
  const link2 = "../images/WebOFF1.png"
  const link3 = "../images/WebDBMP1.png"
  const link4 = "../images/MobileMAB1.png"

  return (
    <>
    <div className="mini-project-container">
      <StaticImage
        className="mini-project-image"
        src={link1}
        width={200}
        quality={50}
        formats={["auto", "webp", "avif"]}
        alt="blah"
      />

      <div className="mini-project-description">
        <Text size={14} weight="900" color="#282828">
            {"Crwn Apparel - E-commerce".toUpperCase()}
        </Text>
        <Text size={12} color="#282828" margin="5px 0 0 0">
          React Developer
        </Text>
      </div>
    </div>
    <div className="mini-project-container">
      <StaticImage
        className="mini-project-image"
        src={link2}
        width={200}
        quality={50}
        formats={["auto", "webp", "avif"]}
        alt="blah"
      />

      <div className="mini-project-description">
        <Text size={14} weight="900" color="#282828">
        {"Official - Relationship Management".toUpperCase()}
        </Text>
        <Text size={12} color="#282828" margin="5px 0 0 0">
          React Native Developer
        </Text>
      </div>
    </div>
    <div className="mini-project-container">
      <StaticImage
        className="mini-project-image"
        src={link3}
        width={200}
        quality={50}
        formats={["auto", "webp", "avif"]}
        alt="blah"
      />

      <div className="mini-project-description">
        <Text size={14} weight="900" color="#282828">
        {"Daily Bread - Meal Prep".toUpperCase()}
        </Text>
        <Text size={12} color="#282828" margin="5px 0 0 0">
          React - React Native Developer
        </Text>
      </div>
    </div>
    <div className="mini-project-container">
      <StaticImage
        className="mini-project-image"
        src={link4}
        width={160}
        quality={50}
        formats={["auto", "webp", "avif"]}
        alt="blah"
      />

      <div className="mini-project-description">
        <Text size={14} weight="900" color="#282828">
        {"Moon Alley Bank - Mobile Wallet".toUpperCase()}
        </Text>
        <Text size={12} color="#282828" margin="5px 0 0 0">
          React Native Developer
        </Text>
      </div>
    </div>
    </>
  )
}

export default MiniProjectCard

//

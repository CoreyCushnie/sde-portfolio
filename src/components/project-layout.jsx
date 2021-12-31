import * as React from "react"

import Text from "./Text"
import "../styles/project-layout.style.css"

import { IoCaretForwardOutline, IoCaretBackOutline } from "react-icons/io5"

const ProjectDisplay = ({
  logo,
  name,
  title,
  tStack,
  desc,
  imageScr,
  pType,
  back,
  forward,
  imageID,
}) => {

  return (
    <div className="project-layout-container">
      <div className="project-layout-media">
        <div align="center" className="project-logo">
          <img src={logo} alt={logo} width="100px" />
        </div>
        <div align="center" className="project-layout-image" >
          <img
            src={imageScr[imageID]}
            alt={imageScr[imageID]}
            width={pType === "Web" ? "100%" : "90%"}
            style={{transform: pType === "Mobile" && "translateX(-10px)"}}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <IoCaretBackOutline
              size={35}
              style={{ cursor: "pointer" }}
              color="#B72828"
              onClick={back}
              />
            {imageID + 1}/{imageScr.length}
            <IoCaretForwardOutline
              size={35}
              style={{ cursor: "pointer" }}
              color="#B72828"
              onClick={forward}
              
            />
          </div>
        </div>
      </div>
      <Text color="#282828" size={24} weight="800">
        {" "}
        {`${name}`.toUpperCase()}{" "}
      </Text>
      <Text color="#282828" size={18}>
        {" "}
        {title}{" "}
      </Text>
      <div style={{ display: "flex", flexDirection: "row", padding: "5px 0", overflow: "scroll"}}>
        {tStack.map((val, idx) => {
          return (
            <Text
              key={idx}
              style={{
                backgroundColor: "#B72828",
                padding: "5px",
                borderRadius: "30px",
              }}
              color="#f8f8ff"
              size={12}
              margin="0px 5px 0 0"
            >
              {" "}
              {val}{" "}
            </Text>
          )
        })}
      </div>

      <Text color="#282828" size={14}>
        {" "}
        {desc}{" "}
      </Text>
    </div>
  )
}

export default ProjectDisplay

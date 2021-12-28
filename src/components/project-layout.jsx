import * as React from "react"

import Text from "./Text"
import "../styles/header.style.css"

import { IoCaretForwardOutline, IoCaretBackOutline } from "react-icons/io5"
import { StaticImage } from "gatsby-plugin-image"

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
    <div style={{ width: "80%" }}>
      <div style={{ margin: "20px 0", display: "flex", flexWrap: "wrap", width: "100%"}}>
        <div align="center" style={{ flex: 1, margin: "auto 0", width: "50%" }}>
          <img src={logo} alt={logo} width="100px" />
        </div>
        <div align="center" style={{ flex: 1, margin: "auto", width:"50%"}}>
          <img
            src={imageScr[imageID]}
            alt={imageScr[imageID]}
            width={pType === "Web" ? "100%" : "100%"}
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
      <div style={{ display: "flex", flexDirection: "row", padding: "10px 0" }}>
        {tStack.map((val, idx) => {
          return (
            <Text
              key={idx}
              style={{
                backgroundColor: "#B72828",
                padding: "10px",
                borderRadius: "30px",
              }}
              color="#f8f8ff"
              size={14}
              margin="0px 10px 0 0 "
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

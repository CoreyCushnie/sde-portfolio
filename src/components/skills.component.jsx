import * as React from "react"

import Text from "./Text"

const Skills = ({ skillsData }) => {
  const CreateBar = ({ name, percentage }) => {
    return (
      <div key={name} >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "5px"
          }}
        >
          <Text color="#282828">{name}</Text>
          <Text color="#282828">{percentage} %</Text>
        </div>
        <div
          className="bar-container"
          style={{
            height: "10px",
            width: "100%",
            backgroundColor: "#C4C4C47d",
            padding: "5px",
            borderRadius: "20px"
          }}
        >
          <div
            className="bar-container"
            style={{height: "inherit", width: `${percentage}%`, borderRadius: "20px", backgroundColor: "#B72828", position: "relative" }}
          ></div>
        </div>
      </div>
    )
  }

  const generateMeters = (barData) => {
    const meters = []
    for (const [key, value] of Object.entries(barData)) {
      meters.push(<CreateBar name={key.replace("_","-")} percentage={value} />)
    }
    return meters
  }
  const textSize = 14
  
  return (
    <div style={{width: "70%"}}>
      {generateMeters(skillsData)}
    </div>
  )
}

export default Skills

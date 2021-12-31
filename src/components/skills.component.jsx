import * as React from "react"

import Text from "./Text"

const Skills = ({ ...props}) => {
  
  const skillsData = {
    "Front-End": 91,
    "Back-End": 79,
    Web: 93,
    Mobile: 89,
    Javascript: 87,
    Gatsby: 83,
    ExpressJS: 81,
    Python: 90,
  }
  const CreateBar = ({ name, percentage }) => {
    return (
      <div key={name}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "5px",
          }}
        >
          <Text color="#282828">{name}</Text>
          <Text color="#282828">{percentage} %</Text>
        </div>
        <div
          className="bar-container"
          style={{
            height: "10px",
            width:
              typeof window !== "undefined" && window.innerWidth < 1000
                ? "85vw"
                : "100%",
            backgroundColor: "#C4C4C47d",
            padding: "5px",
            borderRadius: "20px",
          }}
        >
          <div
            className="bar-container"
            style={{
              height: "inherit",
              width: `${percentage}%`,
              borderRadius: "20px",
              backgroundColor: "#B72828",
              position: "relative",
            }}
          ></div>
        </div>
      </div>
    )
  }

  const generateMeters = barData => {
    const meters = []
    for (const [key, value] of Object.entries(barData)) {
      meters.push(<CreateBar name={key.replace("_", "-")} percentage={value} />)
    }
    return meters
  }

  return <div style={{ width: "70%" }}>{generateMeters(skillsData)}</div>
}

export default Skills

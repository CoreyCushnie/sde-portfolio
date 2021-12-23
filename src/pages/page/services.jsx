import * as React from "react"

import Text from "../../components/Text"
import ServiceCard from "../../components/service-card.component"
import Button from "../../components/button.component"

import "../../styles/services.style.css"

const Services = ({ serviceData, ...props }) => {
  const turnAround = [
    "10 days",
    "1 month",
    "2-weeks",
    "2 days",
    "1-week",
    "3 days",
  ]
  function getServiceData(x) {
    const res = []
    for (const [key, value] of Object.entries(x)) {
      res.push([key, value])
    }
    return res
  }

  return (
    <div>
      <Text size="42" color="#282828" weight="900">
        SERVICES
      </Text>

      <div className="services">
        {getServiceData(serviceData).map((val, idx) => {
          return (
            <ServiceCard
              title={`${val[0].replaceAll("_", " ").toString()}`.toUpperCase()}
              details={`${val[1].replaceAll("_", " ").toString()}`}
              turnAroundTime={`${turnAround[idx]}`.toUpperCase()}
            />
          )
        })}
      </div>

      <Button navigateTo="/projects">Request Service</Button>
    </div>
  )
}

export default Services

//

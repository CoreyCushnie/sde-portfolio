import * as React from "react"

import Text from "../../components/Text"
import ServiceCard from "../../components/service-card.component"
import Button from "../../components/button.component"

import "../../styles/services.style.css"

const Services = ({ ...props }) => {
  const turnAround = [
    "10 days",
    "1 month",
    "2-weeks",
    "2 days",
    "1-week",
    "3 days",
  ]
  const serviceData = {
    "website-creation":
      "Launch your personal blog, develop a business web application, or an easy to manage mult-page website",
    "web-migration":
      "Modernize your current web platform by migrating over to the scalable, simple to manage framework, React",
    "mobile-application":
      "Build your businesses mobile solution with modern technologies, creating the perfect product for you and your clients",
    "3d-mockup-design":
      "Present professional 3D mockups of your web or mobile businesses to shareholders, or potential clients",
    "landing-page-creation":
      "Increase the buzz about your product by creating a landing page for users to stay up-to-date on product news",
    "software-consultation":
      "Discuss your ideas to help better understand your clients and users, selecting the best technologies for your business",
  }

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

import * as React from "react";



import Text from "../../components/Text"
import ServiceCard from "../../components/service-card.component"
import Button from "../../components/button.component"



import "../../styles/services.style.css"

const Services = ({serviceData, ...props}) => {
    console.log(serviceData)
    return (
        <div id="services">
            <Text size="32" color="#282828" weight="900">SERVICES</Text>
            <ServiceCard/>
            <Button navigateTo="/projects" >More Projects</Button>
        </div>
    )
}

export default Services;

// 
import * as React from "react";



import Text from "../../components/Text"
import Button from "../../components/button.component"


import "../../styles/services.style.css"

const Services = (props) => {
    return (
        <div id="services">
            <Text size="32" color="#282828" weight="900">SERVICES</Text>
            <div className="project-preview-container">
                <p>p</p>
            </div>
            <Button navigateTo="/projects" >More Projects</Button>
        </div>
    )
}

export default Services;

// 
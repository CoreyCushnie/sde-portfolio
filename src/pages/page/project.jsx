import * as React from "react";

import MiniProjectCard from "../../components/mini-project-card.component";

import Text from "../../components/Text"
import Button from "../../components/button.component"


import "../../styles/project.style.css"

const ProjectPreviewPage = (props) => {
    return (
        <div>
            <Text size="52" color="#282828" weight="900">PROJECTS</Text>
            <div className="project-preview-container">
                <MiniProjectCard />
            </div>
            <Button navigateTo="/projects" >More Projects</Button>
        </div>
    )
}

export default ProjectPreviewPage;

// 
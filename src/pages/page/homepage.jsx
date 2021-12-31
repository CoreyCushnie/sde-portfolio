import * as React from "react"

import Text from "../../components/Text"
import Button from "../../components/button.component"
import me from "../../images/me.png"

import "../../styles/homepage.style.css"



const HomePage = ({}) => {

  const [titleSize, setTitle] = React.useState(104)
  const [subTitle, setSub] = React.useState(45)
  const [details, setDetails] = React.useState(28)


  React.useEffect(() => {
      if (window.innerWidth < 1000){
        setTitle(52)
        setSub(24)
        setDetails(14)
      }
    }
    )

  return (
    <div className="home-container">
      <div className="home-image-container">
        <img
          src={me}
          style={{ clipPath: typeof window !== 'undefined' && window.innerWidth < 600 && "circle(150px at center"}}
          width="105%"
          height="100%"
          quality={50}
          formats={["auto", "webp", "avif"]}
          alt="HomePhoto"
        />
      </div>
      <div className="intro-details">
        <Text size={titleSize} color="#282828" lHeight={`${titleSize * 0.75}px`} weight="900">
          COREY
          <br />
          CUSHNIE
        </Text>
        <Text size={subTitle} color="#B72828" lHeight={`${subTitle * 0.75}px`} weight="900">
          Front-end Developer
        </Text>
        <Text size={details} margin="20px 0" color="#282828">
          I’m a web and mobile <br />
          developer with 6+ years of freelance <br />
          experience.
        </Text>
        <Button navigateTo="/#services">Contact Me</Button>
      </div>
    </div>
  )
}

export default HomePage

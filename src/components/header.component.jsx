import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Text from "./Text"
import "../styles/header.style.css"
import ContactInfo from "./contact.component"
import { RiMenu4Line } from 'react-icons/ri';


const navTitles = ["home", "about", "projects", "services", "contact"]

const Header = ({ headerData, contactData }) => {
  const [showNav, setShow] = React.useState(false);
  return (
    <header>
      {window.innerWidth > 1000 ? (
        <>
          <div
            style={{
              margin: "20px 0 0 5vw",
            }}
          >
            <Link to="/">
              <StaticImage
                className="logo"
                src={"../images/headerLogo.png"}
                width={150}
                quality={50}
                formats={["auto", "webp", "avif"]}
                alt="Corey Cushnie Vector Logo"
              />
            </Link>
          </div>
          <div className="nav-container">
            {navTitles.map(val => {
              return (
                <Text margin="10px 0 0 0">
                  <Link
                    className="nav-links"
                    to={headerData[val] === "/" ? "/" : `/${headerData[val]}`}
                  >
                    {val.toUpperCase()}
                  </Link>
                </Text>
              )
            })}
          </div>
          <ContactInfo data={contactData} />
        </>
      ) : (
        <>
        <div
          className="header-container"
        >
          <Link to="/">
            <StaticImage
              className="logo"
              src={"../images/headerLogo.png"}
              width={100}
              quality={50}
              formats={["auto", "webp", "avif"]}
              alt="Corey Cushnie Vector Logo"
            />
          </Link>
          <>
          <RiMenu4Line style={{paddingRight: "40px"}} color="white" size={25} onClick={() => setShow(!showNav)}/>
          </>
        </div>
        {showNav && (
          <>
          <div className="nav-container">
            {navTitles.map(val => {
              return (
                <Text margin="10px 0 0 0">
                  <Link
                    onClick={() => {setShow(false)}}
                    className="nav-links"
                    to={headerData[val] === "/" ? "/" : `/${headerData[val]}`}
                  >
                    {val.toUpperCase()}
                  </Link>
                </Text>
              )
            })}
          </div>
        </>
        )}
      </>
      )}
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

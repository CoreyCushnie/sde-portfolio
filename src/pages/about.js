import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Seo from "../components/seo"

import Text from "../components/Text/Text"

const AboutPage = ({ seo }) => {
  
  return (
    <>
      <Seo title={seo} />
      <Text size="38" weight="600" color="black">
        About
      </Text>
    </>
  )
}

export default AboutPage

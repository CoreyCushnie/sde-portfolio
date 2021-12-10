import { useStaticQuery, graphql } from "gatsby"

export default function GET_DATA() {
    const data = useStaticQuery(graphql`
    query ABOUT_ME {
      site {
        siteMetadata {
          pageData {
            navLinks {
              home
              about
              projects
              services
              contact
            }
            aboutMeData {
              p1
              p2
              p3
            }
            personalInfo {
              Name
              Email
              Phone
              Social_Links {
                linkedin
                github
                dribbble
              }
            }
          }
        }
      }
    }
  `)
  return data
} 

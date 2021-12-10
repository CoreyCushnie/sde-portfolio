require("dotenv").config()

module.exports = {
  siteMetadata: {
    siteInfo: {
      title: `Corey Cushnie - Software Developer Engineer Portfolio`,
      description: `Built by Corey Cushnie 2021`,
      author: `@coreycushnie`,
      siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    },

    pageData: {
      navLinks: {
        home: `/`,
        about: `#about`,
        projects: `#projects`,
        services: `#services`,
        contact: `#contact`,
      },
      aboutMeData: {
        p1: "I’m a front-end web and mobile developer with 10 years of experimenting with different languages and frameworks and 6 years of freelance experience. Growing up in the city, I find inspiration around every corner. I love every step of the SDLC process and pride myself in the fast, responsive, and aestically pleasing applications I’ve had the pleasure to be apart of. Everything i’ve done until this point has helped me develop the skills needed to take a project to its next level. ",
        p2: "Discovering new concepts to ideas and solutions that exceed a user's expectation is what keeps me focused on technology's continuing advancement and strengthens my passion for engineering. I've cultivated a reputation as a contributor in every project I'm involved with and look forward to continuing to facilitate positive change and impacting outcomes.",
        p3: "Outside of writing code, I have tons of hobbies and interests! I’m a fan of beautiful architecture and great experiences. I’m always listening to music or watching a TV show, and I love to travel."
      },
      personalInfo: {
        Name: `Corey Cushnie`,
        Phone: `+1(347)635-5021`,
        Email: `corey.cushnie@gmail.com`,
        "Social Links": {
          linkedin: `https://www.linkedin.com/in/corey-cushnie/`,
          github: `https://github.com/CoreyCushnie`,
          dribbble: `https://dribbble.com/CoreyCushnie`
        },
      },
      skillsData: {
        "Front-End": 91,
        "Back-End": 79,
        "Web": 93,
        "Mobile": 89,
        "Javascript": 87,
        "Gatsby": 83,
        "ExpressJS": 81,
        "Python": 90
      }
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `corey-cushnie-sde-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#F8F8FF`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-web-font-loader`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

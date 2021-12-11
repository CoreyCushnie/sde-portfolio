exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/projects",
    component: require.resolve("./src/pages/page/projects/projectpage.js"),
    context: {},
    defer: true,
  })
}

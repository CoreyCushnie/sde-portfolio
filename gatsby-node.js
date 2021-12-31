exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/projects",
    component: require.resolve("./src/pages/projects.js"),
    context: {},
    defer: true,
  })
}

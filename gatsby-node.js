exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/projects",
    component: require.resolve("./src/projects/project.page.js"),
    context: {},
    defer: true,
  })
}

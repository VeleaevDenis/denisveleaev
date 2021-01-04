const { resolve } = require('path')

async function turnBlogPostsIntoPages({ graphql, actions }) {
  // 1. Get a template for this page
  const blogPostTemplate = resolve('./src/templates/BlogPost/index.tsx')

  // 2. Query all blog posts
  const { data } = await graphql(`
    query {
      blogPosts: allContentfulPersonalSiteBlogPost {
        nodes {
          slug
        }
      }
    }
  `)
  // 3. Loop over each blog post and create a page for that post
  data.blogPosts.nodes.forEach(blogPost => {
    actions.createPage({
      // What is the URL for this new page??
      path: `blog/${blogPost.slug}`,
      component: blogPostTemplate,
      context: {
        slug: blogPost.slug,
      },
    })
  })
}

module.exports.createPages = async function createPages(params) {
  // Create pages dynamically
  // Wait for all promises to be resolved before finishing this function
  await Promise.all([turnBlogPostsIntoPages(params)])
}

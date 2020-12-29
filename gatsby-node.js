const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
	// **Note:** The graphql function call returns a Promise
	// see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
    const { createPage } = actions;
    
    const basePath = "/blog/";

	const result = await graphql(`
		query {
			allDatoCmsArticle {
				edges {
					node {
                        slug
					}
				}
			}
		}
	`);
    
    result.data.allDatoCmsArticle.edges.forEach(({ node }) => {
        createPage({
            path: basePath + node.slug,
            component: path.resolve(`./src/templates/blogPost.js`),
            context: {
                slug: node.slug,
            }
        })
    })
};

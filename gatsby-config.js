module.exports = {
  siteMetadata: {
    title: "Will Mundy's Website",
    siteUrl: "https://www.willmundy.com"
  },
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "129d7d538a41540c73056020ef72e0",
      },
    },
    "gatsby-plugin-cname",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-186058572-1",
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
  ],
};

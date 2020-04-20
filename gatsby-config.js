module.exports = {
  siteMetadata: {
    title: 'Single Father\'s Initiative',
    author: 'Omesa'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ]
}

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "GG-PC",
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: "gg-pcs.myshopify.com",
        accessToken: "f51f4d3ea34cc64c8f1b33cf0a77b6b6",
      },
    },
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};

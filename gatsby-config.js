module.exports = {
  siteMetadata: {
    title: "Taechawat Konkaew's Personal Site",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-fontawesome-css",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["material icons outlined", "poppins:300,400,700"],
      },
      display: "swap",
    },
  ],
};

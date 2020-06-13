// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require("path");

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/assets/variables.scss")],
    });
}

module.exports = {
  siteName: "Hi, I'm Núria",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Talk",
        path: "./content/talks/*.json",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Project",
        path: "./content/projects/*.md",
      },
    },
    {
      use: "@perlatsp/gridsome-source-devto",
      options: {
        typeName: "Article",
        username: "pincfloit",
        apiKey: process.env.DEVTO_API_KEY || "wuiLFieHFFbCBFqjBdiNpDiZ",
        route: "/articles/:slug",
      },
    },
  ],
  chainWebpack: (config) => {
    // Load variables for all vue-files
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach((type) =>
      addStyleResource(config.module.rule("scss").oneOf(type))
    );
  },
};

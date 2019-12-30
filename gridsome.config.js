// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Hi, I'm Núria",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Talk",
        path: "./content/talks/*.json"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Project",
        path: "./content/projects/*.md"
      }
    }
  ]
};

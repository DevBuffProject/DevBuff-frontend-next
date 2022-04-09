const Dotenv = require("dotenv-webpack")

const nextConfig = {
  images : {
    domains : [`${process.env.API}`]
  },
  webpack: config => {
    config.plugins.push(
        new Dotenv({
          path: `./.env.${
              process.env.NODE_ENV === "production" ? "production" : "development"
          }`,
        })
    )
    return config
  },
}

module.exports = nextConfig
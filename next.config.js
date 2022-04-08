const Dotenv = require("dotenv-webpack")

const nextConfig = {
  images : {
    domains : ['api-staging.devbuff.com']
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
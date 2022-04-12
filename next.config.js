const Dotenv = require("dotenv-webpack")
const {i18n} = require("./next-i18next.config");

const nextConfig = {
    images: {
        domains: [`${process.env.API}`]
    },
    compiler: {
        removeConsole:  process.env.NODE_ENV === "production",
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
    i18n
}

module.exports = nextConfig
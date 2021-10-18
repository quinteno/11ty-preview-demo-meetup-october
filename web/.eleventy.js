const { EleventyServerlessBundlerPlugin } = require('@11ty/eleventy')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
    name: 'serverless',
    functionsDir: './.netlify/functions/'
  })
  return {
    dir: {
      input: 'src'
    }
  }
}
module.exports = function(config) {
  config.addPassthroughCopy({ public: './' })

  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
  })

  return {
    templateFormats: ['md', 'jpg', 'png', 'gif'],
    dir: {
      input: 'src',
      output: 'dist',
      layouts: '_js/layouts',
    }
  }
}

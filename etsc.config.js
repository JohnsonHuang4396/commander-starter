const log = console.log
const Duration = require('./utils/duration').default

module.exports = {
  esbuild: {
    minify: false,
    target: 'es2015'
  },
  prebuild: async () => {
    const template = (await import('chalk-template')).default
    log(template`🚶 {red Prebuild} stage running...`)
    Duration.start()

    /* do some prebuild job */

    const runtTime = Duration.end()
    log(template`👍 {red Prebuild} stage done! Took {green ${runtTime}}s`)
  },
  postbuild: async () => {
    const template = (await import('chalk-template')).default
    log(template`🏃 {blue Postbuild} stage running...`)
    Duration.start()

    /* do some postbuild job */

    const runtTime = Duration.end()
    log(template`👍 {blue Postbuild} stage done! Took {green ${runtTime}}s`)
  }
}

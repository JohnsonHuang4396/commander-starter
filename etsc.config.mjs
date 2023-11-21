const log = console.log
import Duration from './utils/duration.js'
import template from 'chalk-template'

export default {
  esbuild: {
    minify: false,
    target: 'es2015'
  },
  prebuild: async () => {
    log(template`🚶 {red Prebuild} stage running...`)
    Duration.start()

    /* do some prebuild job */

    const runtTime = Duration.end()
    log(template`👍 {red Prebuild} stage done! Took {green ${runtTime}}s`)
  },
  postbuild: async () => {
    log(template`🏃 {blue Postbuild} stage running...`)
    Duration.start()

    /* do some postbuild job */

    const runtTime = Duration.end()
    log(template`👍 {blue Postbuild} stage done! Took {green ${runtTime}}s`)
  }
}

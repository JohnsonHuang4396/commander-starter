module.exports = {
  esbuild: {
    minify: false,
    target: 'es2015'
  },
  prebuild: async () => {
    const { performance } = require('perf_hooks')
    const chalk = (await import('chalk')).default
    console.log(`🚶 ${chalk.red('Prebuild')} stage running...`)
    const startTime = performance.now()

    /* do some prebuild job */

    const endTime = performance.now()
    const runtTime = endTime - startTime
    console.log(`👍 ${chalk.red('Prebuild')} stage done! Took ${runtTime}s`)
  },
  postbuild: async () => {
    const { performance } = require('perf_hooks')
    const chalk = (await import('chalk')).default
    console.log(`🏃 ${chalk.blue('Postbuild')} stage running...`)
    const startTime = performance.now()

    /* do some postbuild job */

    const endTime = performance.now()
    const runtTime = endTime - startTime
    console.log(`👍 ${chalk.blue('Postbuild')} stage done! Took ${runtTime}s`)
  }
}

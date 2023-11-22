import template from 'chalk-template'
import Duration from './duration.js'
import { execa } from 'execa'
import { rimraf } from 'rimraf'

const log = console.log

void (async function () {
  log(template`{red [starter] 🚀 Start transforming by tsc...} \n`)
  Duration.start()

  await rimraf('./dist')
  await execa('tsc')

  const duration = Duration.end()
  log(template`{blue [starter] 🖖 Transforming done!}`)
  log(template`Took {bgRed ${duration}s} \n`)
})()

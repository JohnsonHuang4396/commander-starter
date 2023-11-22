import fs from 'fs-extra'
import path from 'node:path'
import { program as creator } from 'commander'
import { installProgram } from './utils/install.js'

const { version } = await fs.readJSON('./package.json')

const dirname = new URL('.', import.meta.url).pathname.replace(/\/*/, '')

async function initProgram() {
  creator.version(version)

  /* Auto load modules from src dir, and register in program */
  const programList = await installProgram(path.join(dirname, './commands'))
  programList.forEach(program => creator.addCommand(program))

  creator.parse(process.argv)
}

initProgram()

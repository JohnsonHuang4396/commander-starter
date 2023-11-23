#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'
import { program as creator } from 'commander'
import { installProgram } from './utils/install.js'

const dirname = new URL('.', import.meta.url).pathname.replace(/\/*/, '')

function getPackageVersion() {
  const packageJSONContent = fs.readFileSync(
    path.join(dirname, '../package.json'),
    'utf-8'
  )
  return JSON.parse(packageJSONContent).version || '0.0.0'
}

async function initProgram() {
  creator.version(getPackageVersion())

  /* Auto load modules from src dir, and register in program */
  const programList = await installProgram(path.join(dirname, './commands'))
  programList.forEach(program => creator.addCommand(program))

  creator.parse(process.argv)
}

initProgram()

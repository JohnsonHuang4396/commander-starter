import template from 'chalk-template'
import { createCommand } from 'commander'
import type { Command } from 'commander'

export default function (): Command {
  return createCommand('test')
    .alias('t')
    .description('Test for commander-starter')
    .action(() => {
      console.log(
        template`{bgBlue This is a test program for commander-starter.}`
      )
    })
}

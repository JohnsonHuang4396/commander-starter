import fs from 'node:fs'
import path from 'node:path'

export async function installProgram(loadPath: string) {
  type Result = any[]
  let results: Result = []

  async function withdrawFile(
    file: string,
    pathname: string,
    func: typeof loadFile
  ) {
    const fullpath = path.join(pathname, file)
    const stat = fs.statSync(fullpath)
    if (stat.isDirectory()) await traverse(fullpath, func)
    else await func(fullpath)
  }

  async function traverse(pathName: string, func: typeof loadFile) {
    const promises = fs
      .readdirSync(pathName)
      .map(file => withdrawFile(file, pathName, func))
    await Promise.all(promises)
    return results
  }

  async function loadFile(filename: string) {
    try {
      const mod = await import(`file://${filename}`)
      if (typeof mod === 'object' && mod !== null && !Object.isFrozen(mod)) {
        const defaultExport = mod.default
        if (typeof defaultExport === 'function') {
          results.push(defaultExport())
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  return await traverse(loadPath, async filename => {
    filename.endsWith('.js') && (await loadFile(filename))
  })
}

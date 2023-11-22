import { performance } from 'perf_hooks'

export default class Duration {
  startTime
  endTime

  static reset() {
    this.startTime = undefined
    this.endTime = undefined
  }

  static start() {
    Duration.reset()
    this.startTime = performance.now()
  }

  static end(precision = 2) {
    this.endTime = performance.now()
    return ((this.endTime - this.startTime) / 1000).toFixed(precision)
  }
}

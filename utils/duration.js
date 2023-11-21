const { performance } = require('perf_hooks')

class Duration {
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
    return (this.endTime - this.startTime).toFixed(precision)
  }
}

module.exports.default = Duration

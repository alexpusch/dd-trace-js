'use strict'
const InjectionAnalyzer = require('./injection-analyzer')

class SqlInjectionAnalyzer extends InjectionAnalyzer {
  constructor () {
    super('SQL_INJECTION')
    this.addSub('apm:mysql:query:start', ({ sql }) => this.analyze(sql))
    this.addSub('apm:mysql2:query:start', ({ sql }) => this.analyze(sql))
    this.addSub('apm:pg:query:start', ({ statement }) => this.analyze(statement))
  }
}

module.exports = new SqlInjectionAnalyzer()
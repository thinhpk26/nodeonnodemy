const chalk = require('chalk')
const warning = chalk.keyword('orange')
const err = chalk.red.bold;
const text = 'hello'
const textWarning = 'Warning'

console.log(warning(textWarning))
console.log(chalk.bgGreen.red.bold(text))
// thư viện lodash để xử lý logic js
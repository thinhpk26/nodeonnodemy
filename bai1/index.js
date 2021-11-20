const tool = require('./tool.js')
const result = tool(8, 9)
console.log(result)

const fs = require('fs')
fs.readFile('./data.txt', function(err, data) {
    console.log(data.toString())
})

const path = require('path')
const linkToTool = path.join(__dirname, 'index.js')
console.log(linkToTool)
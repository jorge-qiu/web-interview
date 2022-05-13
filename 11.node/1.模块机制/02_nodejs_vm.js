const fs = require('fs')
const vm = require('vm')

let content = fs.readFileSync('test.txt','utf-8')

eval(content)
 
// single entity of a module import
// const addf = require('./add.js');
// addf(10,3)

/*************************************** */

// Multiple entities of a module import

const mod = require('./add.js')
const path = require('node:path')

console.log(path.basename(__dirname))

console.log(path.basename(__filename))

//console.log(path.basename(__dirname))

mod.add(10,3)
mod.sub(10,3)


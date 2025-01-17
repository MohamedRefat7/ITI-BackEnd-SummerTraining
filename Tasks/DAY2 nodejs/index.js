///global object nodejs
//__direname path of the script
//__filename  the script 
//exports
//require
//module         ->>>>>> types of modules built in modules
//    * os =>> operating system
//    * fs =>>> file system
//    * events
//    * Http =>>> hypertext transfer protocol
const path = require('path')

const fs  = require('fs')
const jsonpath = path.join(__dirname , 'user.json')
const user = fs.readFileSync(jsonpath , "utf-8")
console.log(user)
// const curentfile = path.basename(__filename)
// console.log(curentfile)

// const pathfile = path.join(__dirname, curentfile)
// console.log(pathfile)
const fs            = require('fs')/* fayllar sistemasi bilan ishlidi. NodeJS da ozida bor */

const path      ='./gulp/tasks'

const arrayPathFile = fs.readdirSync(path).map(file => 
    `${path}/${file}`)


module.exports = arrayPathFile




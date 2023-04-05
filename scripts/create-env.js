const fs=require('fs')

fs.writeFileSync('./.env',`API=${process.eventNames.API}\n`)
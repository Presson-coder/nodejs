import { memoryUsage } from "process";

// argv
console.log(process.argv);

// process.env
console.log(process.env.COMPUTERNAME);

// pid
console.log(process.pid);

// cwd()
console.log(process.cwd());

// title 
console.log(process.title);

// memoryUsage()
console.log(memoryUsage());

// uptime()
console.log(process.uptime());

process.on('exit', (code) => {
    console.log(`about to exit with code: ${code}`)
})

// exit()
process.exit(0);

console.log('after extit');
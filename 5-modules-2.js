const os = require('os')

// info about current user
const user = os.userInfo()
// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freemem:os.freemem(),
}
console.log(currentOS)



const path = require('path');
// console.log(path.sep)
//for the path
const filePath = path.join('/content', 'subfolder', 'test.txt');
// console.log(filePath);
    // to check the name
const base = path.basename(filePath);
console.log(base) 
// to get absolute file path
const absolute = path.resolve(__dirname,'content', 'subfolder','test.txt');
console.log(absolute)
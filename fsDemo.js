// import fs from 'fs';
import fs from "fs/promises";

// readFile() - callback
// fs.readFile("./textFile.txt", 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// })
  
// readFileSync() - synchronous version
// const data = fs.readFileSync('./textFile.txt', 'utf8');
// console.log(data);

// readFile() - Promise .then()
// fs.readFile("./textFile.txt", "utf8")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// readfile() - async/await
// const readFile = async () => {
//   try {
//     const data = await fs.readFile("./textFile.txt", "utf8");
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// readFile();

// writeFile()
const writeFile = async () => {
    try {
       const data = await fs.writeFile('./text.txt', 'hello, am writing to this file');
       console.log('File written to...');
    } catch (error){
        console.log(error);
    }
};

const appendFile = async () => {
    try{
        const data = await fs.appendFile('./text.txt', '\nThis is appended text');
        console.log('File appended to...');
    } catch(error){
        console.log(error);
    }
};

writeFile();
appendFile();

import getPosts, { getPostsLength } from "./postController.js";

console.log('Posts ::::::', getPosts());
console.log(`Posts Length ::: ${getPostsLength()}`);

// const { generateRandomNumber, celciusToFahrenheit} = require('./utils')

// console.log(`Random Number ::: ${generateRandomNumber()}`);
// console.log(`Fahnrenheit value ::: ${celciusToFahrenheit(0)}`);
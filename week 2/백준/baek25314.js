const fs=require('fs');
const input=fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let i=parseInt(input[0]);
let n=i/4;
while(n--){
    console.log('long');
}
console.log('int')
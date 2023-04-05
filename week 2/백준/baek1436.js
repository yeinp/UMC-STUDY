const fs=require('fs');
const input=fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let n=parseInt(input[0]);
let cnt=0;
let movie=666;

while(true){
    if(movie.toString().includes('666')){
        cnt++;
    }
    if(n==cnt)
        break;
    movie++;
}
console.log(movie);
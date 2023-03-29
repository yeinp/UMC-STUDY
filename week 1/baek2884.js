const fs=require('fs');
const input=fs.readFileSync("/dev/stdin").toString().trim().split(" ");

parseInt(input[0]);
parseInt(input[1]);

if (input[1] < 45) {
    if (input[0] < 1)
        input[0] = 23;
    else
        input[0] = input[0] - 1;
    input[1] = 60 - (45 - input[1]);
}
else {
    input[1] = input[1] - 45;
}
console.log(input[0],input[1]);
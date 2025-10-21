const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter a word:" , function(n){
    if(n === ){
       console.log(n + " is even number");
    }else{
        console.log(n + " is odd number");
    }
    rl.close();
});
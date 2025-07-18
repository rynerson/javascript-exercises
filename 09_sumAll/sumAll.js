const sumAll = function(num1,num2) {
    let total = 0;
    //Error states
    if(num1 < 0 || num2 <0 || !Number.isInteger(num1) || !Number.isInteger(num2)){
        total = "ERROR";
    }
    //goal is to add all numbers from one number to the other
    else if(num1<=num2){
    for(let i = num1;i<=num2;i++){
        total = total+i;

    }
}
//goal is to add all numbers between one number and the other
else if(num1>num2){
    for(let i = num2; i<=num1;i++){
        total = total+i;
    }

}
    return total;

};

// Do not edit below this line
module.exports = sumAll;

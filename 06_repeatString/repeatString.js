const repeatString = function(string,num) {
    let repeat_string = "";
    if(num < 0){
        repeat_string = repeat_string + "ERROR";
    }
    else{
        for(i = 0; i<num;i++){
            repeat_string=repeat_string+string;
     
        }
}
    return repeat_string;

};

// Do not edit below this line
module.exports = repeatString;

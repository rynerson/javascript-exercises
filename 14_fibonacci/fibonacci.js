const fibonacci = function(my_num) {
    let a = 0;
    let b = 1;
    if(typeof my_num === "string"){
        my_num = Number(my_num);
    }
    if(my_num < 0){
        return "OOPS";
    }
    else{
        for(let i = 0; i<my_num;i++){
            let temp = a;
            a = b;
            b = temp + b;
        }
        return a;
}

};

// Do not edit below this line
module.exports = fibonacci;

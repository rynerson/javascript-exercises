const add = function(val1,val2) {
  return val1 + val2;
  

	
};

const subtract = function(val1, val2) {
  return val1 - val2;
	
};

const sum = function(array) {
  let result = array.reduce((sum, current) => sum + current, 0);
  return result;

	
};

const multiply = function(array) {
   let result = array.reduce((mult, current) => mult * current, 1);
  return result;
  

};

const power = function(num1,num2) {
  return num1 ** num2;
	
};

const factorial = function(num1) {
  if(num1 < 0){
    return "Factorial not defined for negative numbers";
  }
  if(num1 === 0 || num1 === 1){
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= num1; i++) {
    result *= i;
  }
  return result;
  


	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

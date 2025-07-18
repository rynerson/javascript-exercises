const convertToCelsius = function(temp) {
  let final_result = (5/9)*(temp-32);
  return Math.round(final_result*10)/10;
  
};

const convertToFahrenheit = function(temp) {
  let final_result = (9/5)*(temp)+32;
  return Math.round(final_result*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

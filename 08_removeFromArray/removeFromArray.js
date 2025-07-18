const removeFromArray = function(my_array, ...args) {
   return my_array.filter(x=>!args.includes(x));

};

// Do not edit below this line
module.exports = removeFromArray;

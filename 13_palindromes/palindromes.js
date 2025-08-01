const palindromes = function (my_string) {
  const cleaned = my_string.toLowerCase().replace(/[^a-z0-9]/g,"");
  const reverse = cleaned.split("").reverse().join("");
  return cleaned === reverse;
};

// Do not edit below this line
module.exports = palindromes;

   



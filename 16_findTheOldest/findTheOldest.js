const findTheOldest = function(arr) {

    return arr.reduce((oldest,current)=>{
        const currentYear = new Date().getFullYear();

         const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
        const currentAge = (current.yearOfDeath || currentYear) - current.yearOfBirth;

        return currentAge > oldestAge ? current : oldest;
        
        });

};

// Do not edit below this line
module.exports = findTheOldest;

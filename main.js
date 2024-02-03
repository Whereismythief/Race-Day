//Race Day

// assign random race numbers Adult early get raceNumber > 1000 all else< 1000
let raceNumber = Math.floor(Math.random() * 1000); 


console.log(raceNumber);


// Create a variable that indicates whether a runner registered early or not.

let regEarly = false; 
console.log(regEarly);

function getRandomInt( min , max) {
        return Math.floor(Math.random() * max-min + min)
}

let runnerAge = getRandomInt(5 , 101);

// var runnerAge = 22;
console.log(runnerAge);


// Create a control flow statement that checks whether the runner is an adult AND registered early. add 1000 to raceNumber if true

if (regEarly === true && runnerAge >= 18) {
    raceNumber = raceNumber + 1000;
}; 
console.log(raceNumber);

//Create a separate control flow statement below the first (starting with if again). This statement will check age and registration time to determine race time.

if (regEarly === true && runnerAge > 18) {
    console.log(`Participant ${raceNumber} will race at 9:30am`)
} else if (regEarly != true && runnerAge > 18) {
    console.log(`Participant ${raceNumber} will race at 11:00am`)
};

if (runnerAge < 18 ) {
    console.log(`Youth participant ${raceNumber} will race at 12:30pm`)
};

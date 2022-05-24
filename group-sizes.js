const prompt = require('prompt-sync')({sigint: true});

let size = Number(prompt("How many people are in the group? "));

if (size % 3 === 0){
    console.log("There are " + (size / 3) + " groups of 3 people.");

}   else if (size % 3 === 2){
    console.log("There are " + ((size -2) / 3) + " groups of three people and one group of two people.");

}   else if (size % 3 === 1){
    console.log(" There are" + ((size - 4) / 3 + " groups of three people and two groups of two people."));

}   else{
    console.log("ERROR! Does not compute...This only works when you submit a number.");
}




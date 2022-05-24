const prompt = require('prompt-sync')({sigint: true});

let weight = Number(prompt("Enter your earth weight in pounds: "));

let planet = Number(prompt("What planet will you be boxing on? (1: Venus, 2: Mars, 3: Jupiter, 4: Saturn, 5: Uranus, 6: Neptune)?"));

if (planet === 1){
    console.log("Your weight on Venus will be " + (weight * 0.78));

}   else if (planet === 2){
    console.log("Your weight on Mars will be " + (weight * 0.39));

}   else if (planet === 3){
    console.log("Your weight on Jupiter will be " + (weight * 2.65));

}    else if (planet === 4){
    console.log("Your weight on Saturn will be " + (weight * 1.17));
    
}    else if (planet === 5){
    console.log("Your weight on Uranus will be " + (weight * 1.05));
    
}    else if (planet === 6){
    console.log("Your weight on Neptune will be " + (weight * 1.23));
    
}   else{
    console.log("Error! Please re-enter your details.");
}


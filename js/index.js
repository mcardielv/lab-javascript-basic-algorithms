////// Iteration 1: Names and Input

const hacker1 = "Mikey";
const hacker2 = "Spike";


// console.log(`the driver's name is ${ hacker1 }`);
// console.log(`The navigation's name is ${hacker2}`);

// const number1 = parseInt (prompt("first number"));


////// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters., `)
}
else if (hacker1.length == hacker2.length){
    console.log(`Wow you have equally long names, ${hacker1.length} characters!`);
};


////// Iteration 3: Loops

////3.1 Create a loop to (A) split string in characters (B) separated with a space and (C) uppercase.

//(A).split("")
//(B).join(" ")
//(C).toUpperCase

//METHOD PROPERTIES
let hacker1Separated = hacker1.toUpperCase().split("").join(" ");
console.log(hacker1Separated);


//METHOD LOOP

let hacker1SeparatedLoop = "";
for (i = 0; i < hacker1.length; i++){
        hacker1SeparatedLoop += hacker1[i].toUpperCase() + " ";
}
console.log(hacker1SeparatedLoop);



////3.2 Print all the characters with reversed order

//PROPERTIES METHOD

//.split 
//.reverse inverts order
//.join (" ") separates with space


let hacker1Reversed = hacker1.split("").reverse().join(" ");

//LOOP METHOD

let hacker1ReversedLoop = "";

for (i = hacker1.length -1; i>= 0; i--){
        hacker1ReversedLoop += hacker1[i];
}
console.log(hacker1ReversedLoop);


////3.3 Depending of the lexicographic order print who goes first or if they have same name

//METHOD SORT

const hackersNames = [hacker1, hacker2].sort(); //ordena alfabeticamente

if(hackersNames[0] === hacker1){
        console.log("The driver's name goes first.")
}
else if(hackersNames[0] === hacker2){
        console.log("Yo, the navigator goes first definitely.")
}
else if(hackersNames[0] === hackersNames[1]){
        console.log("What?! You both have the same name?")
}

//METHOD LOCAL COMPARE

if (hacker1.localeCompare(hacker2) === -1)
{
        console.log("The driver's name goes first.");
}
else if (hacker2 === hacker1){
        console.log("What?! You both have the same name?");
}
else {
        console.log("Yo, the navigator goes first definitely.");
}

// METHOD FUNCTION

function LexicographicOrder (string1, string2){
        if (string1 < string2) {
                console.log("The driver's name goes first.");
        }
        else if (string1 > string2){
                console.log("Yo, the navigator goes first definitely.");
        }
        else {
                console.log("What?! You both have the same name?")
        }


}
LexicographicOrder(hacker1, hacker2);

////// Iteration 4

//// Bonus Round

let lorem = `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et aliquam ligula. Nulla aliquet mauris posuere, ornare dui at, ultrices elit. Nullam ut justo et eros gravida lobortis a in ligula. Sed sed lectus pulvinar, bibendum mauris a, ultrices eros. Suspendisse potenti. Pellentesque et vehicula neque. Proin ante nulla, accumsan quis ultrices vel, maximus et sem. Aliquam luctus ligula et fringilla ultrices. Duis volutpat id urna eget convallis. Sed pretium leo tempus nulla viverra vulputate. Donec sed ex quis urna maximus sodales. Aenean at rhoncus mi.

        Aenean at dolor aliquam, porta libero eget, sodales leo. Cras lobortis orci risus, non dapibus dui interdum dictum. Nulla vel tortor ac ex tempor faucibus. Quisque consectetur dolor mauris, sit amet dignissim magna pharetra non. Fusce facilisis elit semper, scelerisque nulla sed, vehicula tellus. Aliquam feugiat eleifend neque, ac rhoncus odio pretium quis. Fusce vitae lacus turpis.

        Maecenas a vestibulum justo. Pellentesque sagittis blandit ex quis auctor. Nam vulputate quis velit quis fringilla. Integer pretium urna ut neque dapibus fringilla. Aenean tincidunt urna at auctor lobortis. Nunc sem est, bibendum et porttitor vitae, vestibulum vitae nulla. Nunc mattis sem lectus, ac varius metus semper sed. Sed id auctor sem.
`;

//METHOD WITH 2 FUNCTIONS SPLIT & FILTER
//if we want to count words instead strings, split without space. Right now is et between spaces so does not count inner words. If we had et at the end of a phrase with a . we need to implement the function adding more conditionals.
function amountOfWords(andreu){
        return andreu.split(" et ").length-1;
}
console.log(amountOfWords(lorem));

function etFindingWithFilter (juan){
        return juan.split(" ").filter((farik) => farik == "et").length;
}
console.log(etFindingWithFilter(lorem));

//is supposed to do the same number but in one case is missing if "et" has a dot later or before instead space.

//METHOD FUNCTION COUNTER

//To improve this we can use first detect "e" and with a i+1 detect if it is "t", so we can asure only et not et. met in words can be found. Usually done in case other special characters for example :) emojis that are two symbols.
function countInLorem (loremApplied) {
        let counter=0;
        for(i = 0 ; i <= loremApplied.length ; i++){
          const char1 = loremApplied[i];
          if(char1 === "et"){
            counter++;
          }
        };
        console.log(counter);
      };
      
      countInLorem (lorem.split(" "));

////Bonus Round 2
//METHOD While    
let phraseToCheck = "luza zul";
function palindromeCheck(wordToCheck){
        let length = wordToCheck.length - 1;
        let index = 0;

        while (index < length){
                if (wordToCheck[index] === " "){
                        index ++;
                }
                else if (wordToCheck[length] === " ")
                length--;
                else if (wordToCheck[index] === wordToCheck[length]){
                        index++;
                        length--;
                } else return false;
        }
        return true;
}
console.log (palindromeCheck(phraseToCheck));

//METHOD BODGAN
//He prefer's to create first different const as replace with special characters and then only one conditional
const phraseToCheck2 = "Was it a car or a cat I saw?"
const withoutSpecialChars = phraseToCheck2.replace(/[,?!'. ]/g, "")
const splitSentence = withoutSpecialChars.split("");
const firstCompare = splitSentence.join("").toLowerCase();
const reversedSentence = splitSentence.reverse()
const secondCompare = reversedSentence.join("").toLowerCase()
firstCompare === secondCompare
? console.log("It's a Palindrome :)")
: console.log("It's not a Palindrome, bad luck! :(");


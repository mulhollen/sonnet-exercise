
var sonnet = document.getElementById("sonnet").innerHTML;


// Find and output the starting position of the word "orphans"

var orphans = sonnet.indexOf("orphans");

console.log(orphans);

// Output the number of characters in the sonnet.

var characters = sonnet.length;

console.log(characters);

// Replace the first occurance of the string "winter" with "yuletide".

var replace = sonnet.replace("winter", "yuletide");

// Replace all occurances of the string "the" with "a large".

var gRep = replace.replace(/ the /gi, " a large ");

document.getElementById("sonnet").innerHTML = gRep;

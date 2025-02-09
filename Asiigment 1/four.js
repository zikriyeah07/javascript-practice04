let dumyText = "I am parogramig in JavaScript . the fact about it  is that its every where in backend plus frontend";
 
let printIt = dumyText.toLowerCase().indexOf("javascript");  //tells the position of text to find

let find = dumyText.includes("javascript");  // false although its present beaz of capital word
//so solution is
let find2= dumyText.toLowerCase().includes("javascript");// its gona give true coz its converted to lower case first
let find3= dumyText.toLowerCase().includes('javascript' , 20) // its show false bcoz after index 19 like 20 there is not use of javascript word thats why it gives false
let nonIncludes = dumyText.includes("Pyton");  //false as not included in string


console.log(printIt)
console.log(find)
console.log(find2)
console.log(find3)
console.log(nonIncludes)


//.include(string,position) is actualy used to find the word that if its present in a string or not (true/false)

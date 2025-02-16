let studentName = "he is good boy he gets up early in morning and eats mango he is a hard working student";

let newSentanve = studentName.replace("he","she");
console.log(newSentanve);//this give only the first oneget replace ssoo
newSentanve = studentName.replace(/he/g,"she");
newSentanve = newSentanve.replace(/boy/g, "girl");
console.log(newSentanve);

// check if the boy is there in string thats output or not
let checIS = newSentanve.includes("he");
console.log(checIS);

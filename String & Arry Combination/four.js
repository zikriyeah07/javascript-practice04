let className = "Amjid Aslam Zikriya Ijaz Omer Ahmad";
let covertArr = className.split(" ") 
let conersion = covertArr.sort();

 conersion = covertArr.join(" , ") // join array into string and add comas 

 conersion= conersion.includes("Aslam") // finds out that its included or not 

console.log(conersion);
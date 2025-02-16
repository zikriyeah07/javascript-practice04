let cityNames = ["Peshawar","Karachi","Islamabad","Quetta", "Lahore" ];
let newCity ; // add at last
newCity = cityNames.push("Multan");
console.log(cityNames);
newCity = cityNames.pop();//remove last
console.log(cityNames);

newCity = cityNames.unshift("Sawabi");

console.log(cityNames);

newCity = cityNames.shift("Sawabi");

console.log(cityNames);
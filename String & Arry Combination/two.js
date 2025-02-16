

let names = ["zikriya", "ali", "amjid", "amjid", "omer", "mehmood"];

for (let i = names.length - 1; i >= 0; i--) { 
    if (names.indexOf(names[i]) !== i) {
        names.splice(i, 1);
    }
}

console.log(names.sort());
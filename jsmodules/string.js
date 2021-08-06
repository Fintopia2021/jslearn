let string1 = "Come on, Welcone to Fintopia";
//content()
console.log(string1.concat(", how are you."));
console.log(string1 += ", how are you.");
console.log(string1 + ", hav a nice day");

// charAt()
console.log('The character at index 2 is ' + string1.charAt(2));

// replace('','')
console.log(string1.replace('n', 'm'));
console.log(string1.replaceAll('n', 'm'));

// split()
let splitted = string1.split(',');
console.log(splitted);
console.log(splitted[1].replace('n', 'm'));

// slice()
console.log(string1.slice(0,7));

// substr()
console.log(string1.substr(0,12));

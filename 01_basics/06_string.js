
const name="hitesh"
const repoCount=50

// console.log(name + repoCount + " Value");  //not refrred
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //more reliable

const gameName=new String("hitesh");    //String is Object
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());     //Original String Is Not Changed
console.log(gameName.charAt(0));
console.log(gameName.indexOf('H'));

const newString=gameName.substring(0,4);  //0 to Index 3
console.log(newString);

const anotherString=gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = "        Ajay       ";
console.log(newStringOne)
console.log(newStringOne.trim());

const url="https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20','-'));              //Replace Method









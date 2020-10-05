/*If Else Statements

const age = 16;
// u can change > to ===, we use that because if we use == it  will also acccept strings as tru which is a different value type than what we are looking for 
// >= greater than or equal to can also work
if(age >= 18){
    console.log("you are good to go");
}//this runs only if const is bigger than 18

else if(age < 15){
    console.log("Whoa there lil fella, where do u think you're going")
}// goes through both of these fuctions before it goes to else
else{
    console.log("You are not old enough")
}//only runs if anything is less than 18
const dice1 = 6;
const dice2 = 3;
// if u use || instead of && it basically functions as an or 
if (dice1 === 6 && dice2=== 6 ){
    console.log("you roled a double")
}
else {
    console.log("you didn't role a double")
}
 

//objects
const user = {
    name: `Riya`,
    age: 17,
    married: false,
    purchases: ["phone", "car", "laptop"]

    sayName: fuction() {
        console.log(this.name);
    }
};
user.sayName();
//console.log(user.purchases);
//this

//console.log(this);//shows everythinggg that we used thus for


// switches
const color = `yellow`;

switch(color){
    case `red`:
        console.log(`Color is red`);
        break;
    case`blue`:
        console.log(`Color is blue`);
        break;
    default:
        console.log(`Color is not red or blue`);
        break;
}
let day;

switch(new Date().getDay()){
    case 0;
        day = `Sunday`;
        break;
    case 1;
        day = `Monday`;
        break;
    case 2;
        day = `Tuesday`;
        break;
    case 3;
        day = `Wednesday`;
        break;
    case 4;
        day = `Thursday`;
        break;
    case 5;
        day = `Fridayday`;
        break;
    case 6;
        day = `Saturday`;
        break;
}

console.log(`Today is $(day)`);


//Traversy Arrays
//create some arrays
const numbers = [43,56,33,23,44,36,5];
const numbers2  = new Array(22,45,33,76,54);
const fruit = [`apple`, `banana`, `orange`, `pear`];
const mixed = [22, `Hello`, true, undefined, null, {a:1, b:1}, new Date()];

//console.log(mixed)
let val;

// get array length
val = numbers.length;
//check if is array
val = Array.isArray(numbers);
//get single value
val = numbers[3];//4th value because arrays are 0 based
val = numbers[0];
//insert into array
numbers[2] = 100;
//find index of value
val = numbers.indexOf(36);

//mutating arrays
//add on to end
numbers.push(250);
//add onto front
numbers.unshift(120);
//take off from end
numbers.pop();//took off 250
//take off from front
numbers.shift();
//splice values
numbers.splice(1,3);
//reverse reverse
numbers.reverse();

//Concatonate arrays
val = numbers.concat(numbers2);

//sort
val = fruit.sort();
val = numbers.sort();//sorting by first number
//use the "compare function"
val = numbers.sort(function(x, y){
    return x - y;//reverse sort change to y - x
});

//find
function under50(num){
    return num < 50;
}
val = numbers.find(under50);// can change to over and make < a >

console.log(numbers);
console.log(val);
*/

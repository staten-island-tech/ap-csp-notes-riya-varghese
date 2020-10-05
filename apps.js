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

*/

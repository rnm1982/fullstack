/* let studName = "Reyansh";
//  console.log("Student Name is:",studName);
// console.log(`Student Name is :${studName}`);
const pi= 3.14212121;
console.log(pi); */
 

const accountId = 144553
let accountEmail = "ravindra@google.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);
// console.log(accountEmail);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
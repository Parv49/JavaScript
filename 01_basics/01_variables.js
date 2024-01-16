const accountId = 144553
let accountEmail = "parv123@gmail.com"
var accountPassword = "12345"
accountCity = "Agra"

// accountId = 2 (changing not allowed in const case)
console.log(accountId);

accountEmail = "gupta321@gmail.com"
accountPassword = "54321";

accountCity = "Noida"

console.table([accountEmail, accountPassword, accountCity])
// bhot sari value ko print karane ke liye console.table([value1,value2,...]) use kar sakte he

// constant print karane ke liye 1 hi vway he const use karna and variable use karane ke liye 2 way he let and const jisme var nahi use kara jata kiyoki uska scope define nahi he isiliye let ko use kara jata he and in dono me hi value change ho sakti he par const me nahi hoti jesa upar dekha

let accountState;
console.log(accountState);
// agar JS me koi variable bana ke chod dete he uss me value initialis nahi karate to ussme by dgfault undefine aata he


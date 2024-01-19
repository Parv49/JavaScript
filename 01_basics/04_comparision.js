// > , < , >= , <= , == , !=
// ye to ho gye basic comparision


console.log(null>0)
console.log(null==0)
console.log(null>=0)

console.log(undefined==0)
console.log(undefined>0)
console.log(undefined<0)

// ye jo upar 6 convertion he ye confusing hote he to inhe use na hi karo to bhetar he 


console.log("2" === 2)
// ye strictly compare karta he jese ki agar sirf == lagao to vo to true dedega iss case me kiyoki vo khud convertion karlega aur 2=2 hoga to ture dedega lekin jo === he ye dekhega ki inke data type alag he to ye false dega


// ********************************************MEMORY**********************************************

// Memory r of 2 types: stack, Heap

// stack: used in primitive data types
// jab bhi stack memory use hoti he to jo bhi variable use kara he uski copy milty he , to agar baad me uss variable ki value change bhi kar rahe ho to vo uss copy me se change hoti he orignal same hi rheti he

// Heap: used in Non-Primitive data types
// jab bhi heap memory use hoti he to jo bhi variable use hota he uss ka orignal reference milta he to agar baad me usski value change bho kar rahe ho to uss ki orignal value bhi change ho jaegi
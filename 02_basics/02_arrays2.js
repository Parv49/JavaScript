const arr1=[1,2,3]
const arr2=[4,5,6]


// arr1.push(arr2)
// console.log(arr1);
// ab isme hua kya dono arr merge nahi hue balki arr1 me last me ek index bhad gaya aur ussme arr2 store ho gaya array form me hi
// hum cha rahe the ki dono arr ek me hi aa jae par yaha to kuch aur hi hogaya ek arr ke andar ek aur arr aa gaya


// const allNum1= arr1.concat(arr2)
// console.log(allNum1);
// isse jo hum karna chaaa rahe the vo hogaya dono arr ek sath ek arr me aaa gye par vo arr1 me nahi aae humne arr1.concat kiya tha ,naya arr bana ussme aaye , koi ni kaam to ho gaya


// ab aata he isse bhi bhadiya tarika
// by using spread operator 
const allnum2=[...arr1, ...arr2];
console.log(allnum2);
// isse hum kitte bhi arr ek sath jod sakte he ye iska faida he


const anotherArr1 =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
console.log(anotherArr1);
// vese to aksar nahi hota esa par bychance kabhi fas gye iss situation me to kya kare

// motive he hamara ki sabko ek hi arr me karna he upar ki trhaa
// by using flat() function
const anotherArr2 = anotherArr1.flat(Infinity)
console.log(anotherArr2);
// isse hoga ya sari value ek arr me aajaengi
// jo flat ke baad bracket he usme hane depth deni hoti he kitni depth tak ki value chaiye(arr ke andar arrke andar arr...) to agar infinity dedete he to vo khud hi dekhleta he sari value dedeta he


// ab hamare  pass bhot sare variables he hum chate he un sab ki value ka arr banjae 
let num1=1;
let num2=2;
let num3=3;
console.log(Array.of(num1,num2,num3));
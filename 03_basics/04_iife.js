// Immediately Invoked Function Expressions (IIFE)

// define: 
// jo function imidiately execute hojae (ye to samajhne wali baat par iski sahi define niche likhi he)

// global scope ke pollution se problume hoti he kai baar to uss global scope ke jo variable he ya jo bhi vaha decelaration he unhe hatane ke liye hamne iife ka use kiya


function user(){
    console.log("connected");
}
user();
// ; jaruri eh varna iske baad wala nahi chalega 
// ye to ho gaya normal tarika

(function user2(){
    console.log("connected");
})();
// ye ho gaya iife, bas itna hi simple
// ; jaruri he kiyoki agar uske baad bhi koi iife he to vo nahi chalega agar phele wala ; se terminate nahi hua hoga to

// hamne kara Kya 
// ()() ye 2 prathenthesis liye phele me apna pura function liya, aur jo dusra wala prenthesis he vo uss function ko execute karane ke liye he 

// iife me arrow function bhi aa sakta he 
(() => {
    console.log("connected");
})()


//  2 trha ke iife hote he named iife and simple/unnamed iife
// jo phele wala banaya user2 wala vo named iife he kiyoki uska name he
// jo dusra wala banaya arrow function wala vo unnamed/simple iife he kiyoki uska koi name nahi he

// yaad rakhna 2 iife ek sath likhne he to ; lagana padega varna error aaegi
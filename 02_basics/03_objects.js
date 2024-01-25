// object banane ke 2 tarike he phela literal ki trha dusra constructer ki trha 
// singleton: means ye apni trha ka ek hi object he pure code me
// constructor se jab object banate he to vo singleton hota he , aur dusri tarike se banate he to vo nahi hota

// 1. object literals
const JsUser = {
    name:"Parv",
    Age:21
}
// ye upar object decelare kardiya ab isme jo name,Age he vo bhi string form me liye jata he means keys bhi string form me hi li jati he aur value to kesi bhi dedo unme jese name me string di he"parv" aur Age me number di he 21


// how to acess object 
console.log(JsUser.Age);
// ese karte he acess par ek aur achaa tarika he 

console.log(JsUser["Age"]);
// Ye jo tarika he ye jada sah he kiyoki agar object me koi key string form me likhi hui hui to usse phele wale tarike se nahi acess kiya jaa sakta usse issi tarike se acess kara ja sakta he
// for example: 
const JsUser2 = {
    "fullName": "Parv Gupta",
    Age: 21
}
console.log(JsUser2["fullName"]);


JsUser.name ="gupta"
// object ke andar kisi key ki value ese change karte he
console.log(JsUser);

Object.freeze(JsUser)
// isa karne se JsUser object freeze ho gaya matlab ab usme koi change nahi ho sakta
JsUser.name = "Hi"
console.log(JsUser);
// ye jo last wala JsUser print karaya isme name key ki value gupta hi aaegi kiyoki ye change karne se phele hamne object freeze kar diya he to uske baad koi bhi chane karlo kuch change nahi hoga


// object ke anda function daal ke dekhte he
JsUser2.PrintHi= function(){
    console.log("Hi");
}

console.log(JsUser2.PrintHi);
// uska reference dedega
console.log(JsUser2.PrintHi());
// function execute karadega



// ek undefined alag se print ho raha he extra me uska kuch nahi he vo aata he kabhi kabhi badme janege kyo
// const myArr = [0,1,2,3,4,5,true,"Hitesh"]
// jaruri nahi ek ho type ka bnae ,ek hi ke andar kisi bhi type ke rakh rakhte he
// JS me arrays resizeable hote he ek baar declare kar diya usske baad usse chota bada bhi kar sakte he

const myArr = [0,1,2,3,4,5]
console.log(myArr[0])
// ese array ke elements ko target kiya jata he 

// arr pe jab bhi copy operation karenge to ye shallow copies banata he


const arr2 = new Array(1,2,3,4,5)
// arr decelare karne ka dusra tarika isme squre bracket use nahi karte


// some arr mthords

myArr.push(6)
// arr ke andar value ko add kar deta he
console.log(myArr);


myArr.pop()
// arr ki last value remove ho jaegi

myArr.unshift(9)
console.log(myArr);
// isse arr ke starting me vo value add ho jaegi jo denge
// ab yaha to 5 6 value he , par agar arr me 1000000 value hui to vo ek bekar tarika hoga karne ka kiyoki faltu me complexity bahdegi


myArr.shift()
console.log(myArr);
// arr ki ange vali value nikal dega

console.log(myArr.includes(9));
// batata he ki arr me vo value he ki nahi

console.log(myArr.indexOf(3));
// arr me third index pe jo value hogi vo return karega

console.log(myArr.indexOf(20));
// agar esa index doge jo arr me he hi nahi to -1 output dega


const newArr = myArr.join()
// is newArr me myArr ki value add kardega lakin datatype change hojaega string form me kardega 
console.log(newArr);
console.log(typeof newArr);


// slice & splice

console.log("A "+myArr);
const myn1= myArr.slice(1,3)
console.log(myn1);
console.log("B "+myArr);
const myn2=myArr.splice(1,3)
console.log(myn2);
console.log("C "+myArr);

// phele humne A ke sath orignal array print karaya , ye hamara orignal arr he
// humne ussme slice function lagaya 1 se 3 tak to slice kya karega arr ke 1st index se leke 2nd index tak ki value dega ,1 se 3 index ke liye chalaya tha means last wale index ki value nahi deta slice function

// uske baad humne B ke sath orignall arr print karaya ye dekhne ke liye ki arr me kuch change to nahi hua , jo ki hua bhi nahi 
// means slice function lagane se arr me kuch change nahi hota

// ab humne arr me splice function lagaya aur phir print karaya to humne output me dekha ki splice function ne arr ke 1st se leke 3rd index tak ki value print karadi ab hame lagega ki splice last wali value ke index ki bhi value dedeta he jabki slice nahi deta par ye inke bich ka difference nahi he
// uske baad jab hamne orignal arr print karaya C ke sath to dekha hamara orignal arr hi badal gaya he , humne splice function ke sath 1se 3 ki value di thi to usne orignal arr se 1st index se leke 3rd index tak ki value hi remove kardi means hamara orignal arr change ho gaya ussme se value delete ho gai 
// ye hi he slice and splice ke bich ka difference 
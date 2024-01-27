const user = {
    name:"parv",
    age:21,
    message: function(){
        console.log(` ${this.name} , welcome`);
    }
}
// this ki madat se corrent scope ke andar ke sare variable ko acess kara ja sakta he
// or we can say this current contex ko refer karta he
user.message()

user.name="sam"
user.message()
// ab hamene name chane kar diya uske baad bhi vo dusre name ke sath message print kara raha he

// agar hum upar object ke andar jo function bana he yaad rakhna object ke andar jo function bna he usme (` ${this.name} , welcome`) ye dene ke vjay sirf(this) dede to vo output dega matlab chalega lekin
// agar hum sirf function banate he uske andar tiss chalane ki kosis karte he to vo nahi chalega
function chai(){
    name:"parv"
    console.log(this.name);
}
chai()
// this kaam nahi kara output parv aana chaiye uski vjaye undefined aa raha he
// means work under objects not under functions, haaa agar object ke andar function bana hua he to bhi kaam karega


// ********** Arrow Function ********** 

// arrow function kese banta he
const addTwo = (num1,num2)=>{
    return num1+num2
}
console.log(addTwo(2,4));

// ek aur tarika he arrow function kolikhne ka use khete he
// implicit return , jab ek hi line ka function ho to ussme ese likh sakte he
const addThree=(num1,num2,num3)=> num1+num2+num3
// isme {} lagane ki jarurat nahi he aur return bhi likhne ki jarurat nahi he ye khud hi vo value return kardeta he par sirf ek line ke liye hi likha ja sakta he ye 
const addfour=(num1,num2,num3,num4)=> (num1+num2+num3,num4)
// ese bhi likh sakte he ye bhi implicit return hi khelaega

// bas {} isme rap na ho agar isme rap kar diya to return lagana padega
// agar return keyword use karte he use explicit return khete he jese phela wala arrow function likha tha uper
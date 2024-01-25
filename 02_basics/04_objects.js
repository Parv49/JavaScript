// 2. object constructor
// means object ko singleton kese kare

const JsUsers = new Object()
// object ko constructor ki trha banane ka tarika

console.log(JsUsers);
// jese normal boject me empty object aata he output me vese hi isme bhi same aaega empty object

JsUsers.id= "123abc"
JsUsers.name= "Parv"
JsUsers.age= 21
console.log(JsUsers);
// ese object me key aur value dedete he


// ab hum object ke andar object ko denge 
const JsUsers2={
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            firstName: "Parv",
            sirName: "Gupta"
        }
    }
}
console.log(JsUsers2.fullname);
console.log(JsUsers2.fullname.userFullname);
console.log(JsUsers2.fullname.userFullname.firstName);


// ab object ke andar object daltehe 
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"e",6:"f"}

// 3 tarike he karne ke , teeno hi sahi he par sabse aasan aur bhadiya last wala he 
const obj4={obj1,obj2,obj3}
console.log(obj4);
// hame teeno object ki keys and values ek new object me chiye thi par ise ek new object me teeno alag alag object banke store ho gye

const obj5=Object.assign({},obj1,obj2,obj3)
console.log(obj5);
// isse haamra kaam ho gaya teeno objects ki eys and values ek object me aa gai par isse bhi bhadiya aur achaa tarika he ek

const obj6={...obj1,...obj2,...obj3}
console.log(obj6);
// isse kaam bhi ho raha aur ye bhadiya bhi he 


console.log(obj1);
// orignal object ye he,keys aur value dono print karega
console.log(Object.keys(obj1));
// object ki sirf keys print karega, ek arr print hoga jisme sari keys hogi
console.log(Object.values(obj1));
// object ki sirf values print karega, ek arr print hoga jisme andar sari values hogi
console.log(Object.entries(obj1));
// object ki dono keys aur value print karega , ek arr print hoga jisme key and value pair se print honge


// Destructure of objects

const course={
    name:"JS",
    price:5999,
    corseDiscription:"hihowareyou"
}

// is object ki kisi value ko print karane ke liye likhenge
console.log(course.price);

// par agar is object me 9999 values he to kab tak sabko ese karte rahenge to iska ek aur tarika he
const{price}=course
console.log(price)

// ab ye to chota word tha par agar koi bade word ki key hoti (courseDiscription) to
// const{courseDiscription}=course
// console.log(coursesDiscription);  itna bada baar baar thodi likhenge
// iske badle hum ese likh sakte he
const {corseDiscription: HI}=course
console.log(HI);

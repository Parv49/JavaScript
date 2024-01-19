let score=33
console.log(typeof score)
// number aa raha he type


// par agar "33" ese likha hota to string aata
let age="33"
console.log(typeof age)
// ab agar kahi se data import kar rahe he to vo data to kese bhi aa sakta he ho sakta he age 33 ese likhe aa jae ya phir "33" ese likhe aa jae banane wale ke upar depand he
// to ye to dikaat ho jaegi k humage ko number form me samajh rahe honge par vo aa rakhi hogi string form me


let temp1= Number(age)
// isse hua kya humne convertion kar diya string value ka Number value me ab agar age string ke form me aa rakhi hogi("33") to ab vo number ki form me convert ho jaegi(33)
console.log(typeof temp1)


// par har baar sirf number ya string value thodi aaengi ho sakta he kabhi mix hoke bhi aa jae 
let value="10ten"
let temp2= Number(value)
console.log(typeof temp2)
// ab isme convertion kiya to type number hi aaya par alphabates number me kese convert ho sakte he
// to jara temp2 ko dekhe to sahi ki ussme value aai kya convert karne ke baad
console.log(temp2)
// ye to NaN aai (Not A Number), convertion se usne type to change kar diya number me par usske andar jo value he vo NaN ho gai
// NaN ek spetial type he 
// to achaa rahega agar check karle condition laga ke ki kahi value NaN to nahi ho gai he convertion laga ke agar nahi hui he to sahi he ange code likhte raho


let temp3=null
// Number me convertion karne pe 0 aata he
let temp4=undefined
// Number me convertion karne par NaN aata he
let temp5=true
// Number me convertion karne par 1 aata he
let temp6=false
// Number me convertion karne par 0 aata he 
let temp7="Parv"
// Number me convertion karne par NaN aata he 


// upar to Number me convertion kar rahe the ese hi sab me kar sakte he ,string me kar sakte he, booolean me kar sakte he

// boolean me karte samay kya hoga
// "Parv" => true
// "" => false
// "1" => true
// etc...



// ***************** Operations ****************



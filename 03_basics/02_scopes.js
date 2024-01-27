let a =10;
const b=20;
var c =30;
console.log(a);
console.log(b);
console.log(c);

// {} ye curly bracket hi scope he
// {} iss ke andar ka mamla local scope aur {} isske bhar ka mamla global scope

// ab agar hum {} is ke andar let a =100 likh de to
// agar hum {} ke andar print karaenge a to 100 aaega aur {} ke bahar print karaenge a to 10 aaega, ye global scope ko effect nahi karta

// ab agar hum {} ke andar var c=300 likhde ya sirf c=300 likh de to 
// agar hum {} ke andar print karaenge c ko to 300 aaega aur agar {} ke bahar print karaenge c ko to bhi 300 hi aaega, ye global scope ko effect kar deta he


// nasted scope bhi ho sakte he scope ke andar scope keandar.....
// uss case me child apne parent ki har chij acess kar sakta he parent apne child ki chije acess nahi kar sakta
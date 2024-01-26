function Myname(){
    console.log("Parv Gupta");
}
// ese function banta he

Myname()
// ese function ko execute karaya jata he

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

addTwoNumbers()
// ese agar execute karaenge to Nan aaega
// function ko execute hone ke liye 2 arguments chaiye jo hame execute karate samay dene honge
addTwoNumbers(3,4)
// ab function achee se kaam karega aur 7 (3+4) print karaega


// ab jaruri thodu he har baar number hi de user suppose usne diya 3 and "4" usne 4 ko string me diya au r3 ko number me
addTwoNumbers(3,"40")
// to output aaega 34 js me dekha ki 4 string he to vo sochegi ki 3 bhi string hi hogi to usne 2 string ko add kar diya ese 34 aaya


// ho sakta he ki 3 aur "a" dede user
addTwoNumbers(3,"a")
// ese me 3a print hoga

// ab ese ho kuch bhi ho sakta he ki user null, boolean ,etc koi bhi datatype ka data dede to isiliye function me hi usse if else laga ke check karlo ki dono ussi datatype ke he jo chaiye ya nahi taki baad me diaat na aae


// jab function ko define karte he uss samay jo ()ke andar likhte he unhe perameters bola jata he
// aur jab function ko call karaya jata tab jo () ke andar likhte he unhe bola jata he arguments


// JS ke andar hum kisi function ko call karte samay kisi variable ke andar bhi store kar sakte he
const temp = addTwoNumbers(2,4)
console.log(temp);
// par agar hum temp ko print karaenge to 6 (2+4) nahi aaega undefined aaega, kiyoki function kuch return nahi kar raha haa vo print kara raha he dono argument ka sum par use return nahi kara raha print karana aur return karana alag alag chije he to isse kese sahi kiya jae ,fun se kuch return karke vo kese karate he niche dekhte he
// function ke andar return karane ke baad jitta bhi code likha jaega vo execute nahi hota,return ke baad function se bhar aa jate he
// return bhi kai tarike se kara sakte he


function addTwoNumber(numbers1, numbers2){
    let result = numbers1+numbers2
    return result
}
const temp2=addTwoNumber(2,4)
console.log(temp2);
// ek to ye ho gaya upar vala tarika return karane ke 

// ek hi ki faltu me kyo hi new variable banae sidha return kara do dono ka sum 
function addTwoNumberss(numbers1, numbers2){
    return numbers1+numbers2
}
const temp3=addTwoNumberss(2,4)
console.log(temp3);


// return karaneka matlab ye nahi he ki vo print hogi print karane ke liye tumhe kisi variable me usse lena hoga uss variable ko print karana hoga jese upar kar rahe function return to kar raha value par vo value tepm wale variable ma jaa rahi fir uss variable ko print kara rahe , na ki vo return karne se khud print ho rahi


// ****Rest Operator****
// for example hamare pe shopping cart he to ussme to kitne bhi item add kar sakte he to upar wale function me to khud arguments de rahe he vo bhi kam 2 ya 3 aur ek baar de diya phir use dobara badla nahi jaa sakta ,mano humne 2 diye he aur user cart me 100 item daal raha he tab kya kare iske liye rest operator kaam aata he ke hi spread operator hota he jo phele phada tha(ten dot wala(...))

function cart(...num){
    return num;
}
console.log(cart(200,300,400,900));
// isse jitne bhi argument delo vo sab ek arr me print kara dega


// function ke andar object bh dale jaa sakte he
// function ke andar array bhi dale jaa sake he